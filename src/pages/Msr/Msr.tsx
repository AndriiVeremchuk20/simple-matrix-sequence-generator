import React, { ChangeEvent, useCallback, useState } from "react";
import "./Msr.scss";
import InputMatrix from "../../components/InputMatrix/InputMatrix";
import { onModulate } from "../../utils/matrix";

type MatrixParams = {
  rows: number;
  cols: number;
};

type FormParams = {
  nca: string;
  mcb: string;
};


export const Msr = () => {
  const [matrixParams, setMatrixParams] = useState<MatrixParams>({
    cols: 2,
    rows: 2,
  });

  console.log(onModulate("1101","11001", 3,4, [[0,1,0,1], [0,1,1,1],[0,0,0,1]]));

  const [matrix, setMatrix] = useState<number[][]>([]);

  const onRowsChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMatrixParams((prev) => ({ ...prev, rows: parseInt(value) }));
  }, []);

  const onColsChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMatrixParams((prev) => ({ ...prev, cols: parseInt(value) }));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="lsr">
          <div>instruction video or gif</div>
          <form>
            <div>
              <label htmlFor="nca">NCa:</label>
              <input
                type="number"
                id="nca"
                min={2}
                max={10}
                onChange={onRowsChange}
              />
            </div>
            <div>
              <label htmlFor="mcb">MCb:</label>
              <input
                type="number"
                id="mcb"
                min={2}
                max={10}
                onChange={onRowsChange}
              />
            </div>
            <div>
              <div>
                <label htmlFor="rows">Rows(N):</label>
                <input
                  type="number"
                  id="rows"
                  min={2}
                  max={10}
                  onChange={onRowsChange}
                />
              </div>
              <div>
                <label htmlFor="cols">Cols(M):</label>
                <input
                  type="number"
                  id="cols"
                  min={2}
                  max={10}
                  onChange={onColsChange}
                />
              </div>
            </div>
            <div>
              <InputMatrix
                cols={matrixParams.cols}
                rows={matrixParams.rows}
                onChange={setMatrix}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
