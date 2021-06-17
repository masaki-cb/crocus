import { CritiqueQuestionName as CritiqueQuestionID } from "../types/Critique";

export const CritiqueQuestionIDs: CritiqueQuestionID[] = [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
];

export const CritiqueQuestion = {
    "Q1": {
        bodyShort:"〇〇性",
        body: "読みやすいと思いますか？",
        0: '読みにくい',
        10: '読みやすい'
    },
    "Q2": {
        bodyShort:"〇〇性",
        body: "わかりやすいと思いますか？",
        0: 'わかりにくい',
        10: 'わかりやすい'
    },
    "Q3": {
        bodyShort:"〇〇性",
        body: "今後の演奏に役に立つと思いますか？",
        0: '役に立たない',
        10: '役に立つ'
    },
    "Q4": {
        bodyShort:"〇〇性",
        body: "今後の演奏に関連しない記載があると思いますか？",
        0: '関連しない記載がある',
        10: '関連しない記載はない'
    },
    "Q5": {
        bodyShort:"〇〇性",
        body: "曖昧な記載だと思いますか？",
        0: '曖昧である',
        10: '曖昧でない'
    },
    "Q6": {
        bodyShort:"〇〇性",
        body: "今後の演奏に関連する記載が全て書かれていると思いますか？",
        0: '書かれていない',
        10: '書かれている'
    },
    "Q7": {
        bodyShort:"〇〇性",
        body: "矛盾がないと思いますか？",
        0: '矛盾がある',
        10: '矛盾はない'
    },
    "Q8": {
        bodyShort:"〇〇性",
        body: "記載されている内容は演奏を聴くことで検証できると思いますか？",
        0: '検証できない',
        10: '検証できる'
    },
    "Q9": {
        bodyShort:"〇〇性",
        body: "記載されている内容から該当箇所を楽譜で参照できると思いますか？",
        0: '参照できない',
        10: '参照できる'
    },
}