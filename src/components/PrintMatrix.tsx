import React from "react";

type PrintMatrixProps = {
  matrix: number[][];
};

const PrintMatrix: React.FC<PrintMatrixProps> = ({ matrix }) => {
  return (
    <table className="matrix">
      <tbody>
        {matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td className={`matrix-item ${cell===1?"mark-cell":""}`} key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PrintMatrix;