import { CritiqueQuestionID } from "../types/Critique";

export const critiqueQuestionIDs: CritiqueQuestionID[] = [
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

export const critiqueQuestion = {
    "Q1": {
        bodyShort:"〇〇性",
        body: "今後の演奏に役に立つと思いますか？",
        min: '役に立たない',
        max: '役に立つ'
    },
    "Q2": {
        bodyShort:"〇〇性",
        body: "読みやすいと思いますか？",
        min: '読みにくい',
        max: '読みやすい'
    },
    "Q3": {
        bodyShort:"〇〇性",
        body: "わかりやすいと思いますか？",
        min: 'わかりにくい',
        max: 'わかりやすい'
    },
    "Q4": {
        bodyShort:"〇〇性",
        body: "今後の演奏に関連しない記載があると思いますか？",
        min: '関連しない記載がある',
        max: '関連しない記載はない'
    },
    "Q5": {
        bodyShort:"〇〇性",
        body: "曖昧な記載だと思いますか？",
        min: '曖昧である',
        max: '曖昧でない'
    },
    "Q6": {
        bodyShort:"〇〇性",
        body: "今後の演奏に関連する記載が全て書かれていると思いますか？",
        min: '書かれていない',
        max: '書かれている'
    },
    "Q7": {
        bodyShort:"〇〇性",
        body: "矛盾がないと思いますか？",
        min: '矛盾がある',
        max: '矛盾はない'
    },
    "Q8": {
        bodyShort:"〇〇性",
        body: "記載されている内容は演奏を聴くことで検証できると思いますか？",
        min: '検証できない',
        max: '検証できる'
    },
    "Q9": {
        bodyShort:"〇〇性",
        body: "記載されている内容から該当箇所を楽譜で参照できると思いますか？",
        min: '参照できない',
        max: '参照できる'
    },
}