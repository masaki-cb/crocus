import os
import re
import json
import csv
import sys
import argparse
import glob

OUTPUT_JSON_FILENAME="data.json"

'''

python json_creater.py input/oboe/Critique_Documents input/oboe/tagged0610  input/oboe/Lickert_file_question_average.csv ../src/data/oboe

python json_creater.py input/guitar/guitar_documents input/guitar/guitar_taggeddocuments  input/guitar/guitar_scores.csv ../src/data/guitar

python json_creater.py input/piano/piano_documents input/piano/piano_taggeddocuments  input/piano/piano_scores.csv ../src/data/piano

'''

parser = argparse.ArgumentParser(description='crocusのdata.jsonを作成するためのプログラム')
parser.add_argument('critique_dir', help='Critique_Documents のフォルダパス（絶対パスか　datasetフォルダからの相対パス）')
parser.add_argument('tagged0610_dir', help='tagged0610 のフォルダパス（絶対パスか　datasetフォルダからの相対パス）')
parser.add_argument('Lickert_csv_file', help='Lickert_file_question_average.csvのファイルパス（絶対パスか　datasetフォルダからの相対パス）')
parser.add_argument('out_dir', help='出力パス　もし無ければ作成される　なかに　OUTPUT_JSON_FILENAME が作成される')


args = parser.parse_args()
critique_datas = []


for f_name in os.listdir(args.critique_dir):
    with open(os.path.join(args.critique_dir, f_name), encoding="utf-8") as f:
        content = f.read()

    tagger_file=os.path.join(args.tagged0610_dir, f_name)
    with open(tagger_file, encoding="utf-8") as f:
        taggedContent = f.read()
    PieceID, PlayerID, CriticID = re.findall(
        "(n\d{2}-\w{3}-\w+)-(p\d{2})-(c\d{2})", f_name
    )[0]
    scores = {
        "Q1": 0,
        "Q2": 0,
        "Q3": 0,
        "Q4": 0,
        "Q5": 0,
        "Q6": 0,
        "Q7": 0,
        "Q8": 0,
        "Q9": 0,
    }
    with open(args.Lickert_csv_file, encoding="utf-8") as f:
        reader = csv.reader(f)
        for row in reader:
            if row[0] != f_name:
                continue
            else:
                scores[row[1]] = float(row[2])
    critique_datas.append(
        {
            "pieceID": PieceID,
            "playerID": PlayerID,
            "criticID": CriticID,
            "critiqueFileName": f_name,
            "content": content,
            "taggedContent": taggedContent,
            **scores
        }
    )


os.makedirs(args.out_dir, exist_ok=True)
out_path = os.path.join(args.out_dir, OUTPUT_JSON_FILENAME)

with open(out_path, mode="wt", encoding="utf-8") as file:
    json.dump(critique_datas, file, ensure_ascii=False, indent=2)
print("output",out_path)