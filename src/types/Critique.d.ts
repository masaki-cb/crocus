export type CritiqueQuestionID = 'Q1'|'Q2'|'Q3'|'Q4'|'Q5'|'Q6'|'Q7'|'Q8'|'Q9'

export interface CritiqueRecord {
    pieceID: string;
    playerID: string;
    criticID: string;
    critiqueFileName: string;
    content: string;
    taggedContent: string;
    Q1: number;
    Q2: number;
    Q3: number;
    Q4: number;
    Q5: number;
    Q6: number;
    Q7: number;
    Q8: number;
    Q9: number;
}