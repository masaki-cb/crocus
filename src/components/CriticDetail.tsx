import { useState } from "react";

type Data = {
  pieceID: string;
  playerID: string;
  criticID: string;
  critiqueFileName: string;
  content: string;
};
type Props = { data:Data };
const CriticDetail = ({ data }: Props) => {
  return (
      <>
      {data.content}
      </>
  );
};
export default CriticDetail;
