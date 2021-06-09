import os 
import re
import json

critique_datas = []
DIRNAME = "Critique_Documents"
for f_name in os.listdir(DIRNAME):
    with open(os.path.join(DIRNAME, f_name), encoding='utf-8') as f:
        content = f.read()
    PieceID,PlayerID,CriticID = re.findall('(n\d{2}-\w{3}-\w{4})-(p\d{2})-(c\d{2})', f_name)[0]
    critique_datas.append({
        "pieceID":PieceID,
        "playerID":PlayerID,
        "criticID":CriticID,
        "critiqueFileName":f_name,
        "content": content
    })

with open('data.json', mode='wt', encoding='utf-8') as file:
  json.dump(critique_datas, file, ensure_ascii=False, indent=2)