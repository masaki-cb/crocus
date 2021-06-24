import { i18n as I18n } from "i18next";
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

export const critiqueQuestion = (i18n: I18n) => {
  return {
    "Q1": {
      bodyShort: i18n.t("有用性"),
      body: i18n.t("今後の演奏に役に立つと思いますか？"),
      min: i18n.t('役に立たない'),
      max: i18n.t('役に立つ')
    },
    "Q2": {
      bodyShort: i18n.t("可読性"),
      body: i18n.t("読みやすいと思いますか？"),
      min: i18n.t('読みにくい'),
      max: i18n.t('読みやすい')
    },
    "Q3": {
      bodyShort: i18n.t("了解性"),
      body: i18n.t("わかりやすいと思いますか？"),
      min: i18n.t('わかりにくい'),
      max: i18n.t('わかりやすい')
    },
    "Q4": {
      bodyShort: i18n.t("関連性"),
      body: i18n.t("今後の演奏に関連しない記載があると思いますか？"),
      min: i18n.t('関連しない記載がある'),
      max: i18n.t('関連しない記載はない')
    },
    "Q5": {
      bodyShort: i18n.t("非曖昧性"),
      body: i18n.t("曖昧な記載だと思いますか？"),
      min: i18n.t('曖昧である'),
      max: i18n.t('曖昧でない')
    },
    "Q6": {
      bodyShort: i18n.t("完全性"),
      body: i18n.t("今後の演奏に関連する記載が全て書かれていると思いますか？"),
      min: i18n.t('書かれていない'),
      max: i18n.t('書かれている')
    },
    "Q7": {
      bodyShort: i18n.t("一貫性"),
      body: i18n.t("矛盾がないと思いますか？"),
      min: i18n.t('矛盾がある'),
      max: i18n.t('矛盾はない')
    },
    "Q8": {
      bodyShort: i18n.t("検証容易性"),
      body: i18n.t("記載されている内容は演奏を聴くことで検証できると思いますか？"),
      min: i18n.t('検証できない'),
      max: i18n.t('検証できる')
    },
    "Q9": {
      bodyShort: i18n.t("追跡性"),
      body: i18n.t("記載されている内容から該当箇所を楽譜で参照できると思いますか？"),
      min: i18n.t('参照できない'),
      max: i18n.t('参照できる')
    },
  }
}