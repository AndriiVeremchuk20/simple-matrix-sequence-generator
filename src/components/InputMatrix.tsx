import React, { useEffect, useState } from "react";

type MatrixFormProps = {
  rows: number;
  cols: number;
  onChange: (matrix: number[][]) => void;
};

const InputMatrix = ({ rows, cols, onChange }: MatrixFormProps) => {
  const [matrix, setMatrix] = useState<number[][]>([[]]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number
  ) => {
    const updatedMatrix = [...matrix];
    console.log(event.target.value);
    updatedMatrix[rowIndex][colIndex] = event.target.checked ? 1 : 0;
    setMatrix(updatedMatrix);
    onChange(matrix);
  };

  useEffect(() => {
    setMatrix([...Array(rows)].map(() => Array(cols).fill(0)));
    onChange(matrix);
  }, [rows, cols]);

  return (
    <div className="border-2 border-black w-fit p-2">
      {matrix.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <input
              className="m-1"
              key={colIndex}
              type="checkbox"
              checked={!!cell}
              onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default InputMatrix;
