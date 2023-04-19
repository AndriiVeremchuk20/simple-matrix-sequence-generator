import React, { useEffect, useState } from 'react';

type MatrixFormProps = {
  rows: number;
  cols: number;
};

const InputMatrix = ({ rows, cols }: MatrixFormProps) => {
  const [matrix, setMatrix] = useState<number[][]>([...Array(rows)].map(() => Array(cols).fill(0)));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, rowIndex: number, colIndex: number) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][colIndex] = parseInt(event.target.value);
    setMatrix(updatedMatrix);
  };

  useEffect(()=>{
    setMatrix([...Array(rows)].map(() => Array(cols).fill(0)));
  },[rows, cols])

  return (
    <div>
      {matrix.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <input
              key={`col-${colIndex}`}
              type="number"
              min="0"
              max="1"
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