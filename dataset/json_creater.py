import os
import re
import json
import csv

critique_datas = []
DIRNAME = "Critique_Documents"


for f_name in os.listdir(DIRNAME):
    with open(os.path.join(DIRNAME, f_name), encoding="utf-8") as f:
        content = f.read()
    PieceID, PlayerID, CriticID = re.findall(
        "(n\d{2}-\w{3}-\w{4})-(p\d{2})-(c\d{2})", f_name
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
    with open("Lickert_file_question_average.csv", encoding="utf-8") as f:
        reader = csv.reader(f)
        for row in reader:
            if row[0] != f_name:
                continue
            else:
                scores[row[1]] = row[2]
    print(scores)
    critique_datas.append(
        {
            "pieceID": PieceID,
            "playerID": PlayerID,
            "criticID": CriticID,
            "critiqueFileName": f_name,
            "content": content,
            **scores
        }
    )


with open("data.json", mode="wt", encoding="utf-8") as file:
    json.dump(critique_datas, file, ensure_ascii=False, indent=2)
