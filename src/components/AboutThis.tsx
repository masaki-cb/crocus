import { FC } from "react";
import { useTranslation } from "react-i18next";

const AboutThis: FC = () => {
  const [t] = useTranslation();

  return (
    <p className="mb-4">
      {t(
        "CROCUS(CRitique dOCUmentS) 音楽演奏講評データセットは音楽教育研究のための公開データです。複数の楽器奏者による音楽演奏とその演奏に対する複数の指導者による講評文書が収められています。"
      )}
      <br />
      {t(
        "プロを目指す楽器演奏者がどのような「ことば」で教育を受けているか、その質的な知は広く共有されていません。プロの教育者の「ことば」の使い方を分析・類型化することにより演奏指導における「ことば」の使い方に関する知見が明らかになることを願っております。"
      )}
    </p>
  );
};

export default AboutThis