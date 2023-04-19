import math from "mathjs";
import React, { useEffect, useState } from "react";

type MatrixFormProps = {
  rows: number;
  cols: number;
  onChange: (matrix: number[][]) => void;
};

const InputMatrix = ({ rows, cols, onChange }: MatrixFormProps) => {
  const [matrix, setMatrix] = useState<number[][]>(
    [...Array(rows)].map(() => Array(cols).fill(0))
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number
  ) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][colIndex] = event.target.value?1:0;
    setMatrix(updatedMatrix);
    onChange(matrix);
  };

  useEffect(() => {
    setMatrix([...Array(rows)].map(() => Array(cols).fill(0)));
    onChange(matrix);
  }, [rows, cols]);

  return (
    <div>
      {matrix.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <input
              key={`col-${colIndex}`}
              type="checkbox"
              value={cell}
              onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default InputMatrix;