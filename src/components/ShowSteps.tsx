import React, { useCallback, useState } from "react";
import PrintMatrix from "./PrintMatrix";

interface PropShowSteps {
  matrixArr: Array<number[][]>;
}

export const ShowSteps: React.FC<PropShowSteps> = ({ matrixArr }) => {
  const [currIndex, setCurrIndex] = useState<number>(0);

  const onNextClick = useCallback(() => {
    if (currIndex !== matrixArr.length - 1) {
      setCurrIndex((prev) => prev + 1);
    }
  }, [currIndex]);

  const onBackClick = useCallback(() => {
    if (currIndex !== 0) {
      setCurrIndex((prev) => prev - 1);
    }
  }, [currIndex]);

  return (
    <div className="w-full flex gap-2">
      <div className="font-bold">
        Step {`${currIndex}/${matrixArr.length - 1}`}:
      </div>
      <div>
        <PrintMatrix matrix={matrixArr[currIndex]} />
        <div className="w-full flex justify-between text-xl">
          <button onClick={onBackClick} title="back">⬅️</button>
          <button onClick={onNextClick} title="next">➡️</button>
        </div>
      </div>
    </div>
  );
};
