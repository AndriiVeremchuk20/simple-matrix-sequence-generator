import React, { ChangeEvent, useCallback, useState } from "react";
import "./Msr.scss";
import InputMatrix from "../../components/InputMatrix/InputMatrix";
import { onModulate } from "../../utils/matrix";
import { useForm } from "react-hook-form";
import PrintMatrix from "../../components/PrintMatrix/PrintMatrix";
import { PolinomTable } from "../../components/PolinomTable/PolinomTable";

type MatrixParams = {
  rows: number;
  cols: number;
};

type FormParams = {
  nca: string;
  mcb: string;
};

type Result = {
  T: number;
  allStates: Array<any>;
};

export const Msr = () => {
  const [matrixParams, setMatrixParams] = useState<MatrixParams>({
    cols: 2,
    rows: 2,
  });
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const { register, handleSubmit } = useForm<FormParams>();

  const onRowsChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMatrixParams((prev) => ({ ...prev, rows: parseInt(value) }));
  }, []);

  const onColsChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMatrixParams((prev) => ({ ...prev, cols: parseInt(value) }));
  }, []);

  const onSubmit = handleSubmit((data) => {
    try {
      console.log(
        onModulate(
          data.nca,
          data.mcb,
          matrixParams.rows,
          matrixParams.cols,
          matrix
        )
      );
      setResult(
        onModulate(
          data.nca,
          data.mcb,
          matrixParams.rows,
          matrixParams.cols,
          matrix
        )
      );
    } catch (e) {
      alert("hmm..");
    }
  });

  const onReset = useCallback(() => {
    setMatrixParams({ cols: 2, rows: 2 });
    setResult(null);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="msr">
          <div>instruction video or gif</div>
          <div className="form-content">
            <form className="form" onSubmit={onSubmit} onReset={onReset}>
              <div className="form-header">MSR-calculator</div>
              <div className="form-item">
                <label htmlFor="nca">NCa:</label>
                <input type="text" id="nca" {...register("nca")} />
              </div>
              <div className="form-item">
                <label htmlFor="mcb">MCb:</label>
                <input type="text" id="mcb" {...register("mcb")} />
              </div>
              <div className="form-item">
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
              <div className="btn-group">
                <button type="reset">Reset</button>
                <button type="submit">Calc</button>
              </div>
            </form>
            <PolinomTable />
          </div>
          <div>
            {result ? (
              <div className="msr-result">
                <h2>Results:</h2>
                <div className="res-item">
                  <div className="res-title">T:</div>
                  <div>{result.T}</div>
                </div>
                <div className="res-matrix">
                  {result.allStates.map((steteMatrix, index) => (
                    <div className="matrix-item" key={index}>
                      <div className="res-title">{index}: </div>
                      <PrintMatrix matrix={steteMatrix} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
