import React, { ChangeEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { onModulate } from "./utils/matrix";
import InputMatrix from "./components/InputMatrix";
import { PolinomTable } from "./components/PolinomTable";
import PrintMatrix from "./components/PrintMatrix";
import { Header } from "./layout/Header";

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

export const App = () => {
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
      alert("error");
    }
  });

  const onReset = useCallback(() => {
    setMatrixParams({ cols: 2, rows: 2 });
    setResult(null);
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-blue-200 min-h-screen max-h-fit flex justify-center">
        <div className="bg-neutral-300 w-5/6 pt-10">
          {/* <div>instruction video or gif</div> */}
          <div className="w-full flex flex-col items-center">
            <form
              className="form w-fit p-4 bg-slate-500 bg-opacity-20 flex flex-col items-center gap-3"
              onSubmit={onSubmit}
              onReset={onReset}
            >
              <div className="my-2 border-b">
                <label htmlFor="">NCa:</label>
                <input
                  type="text"
                  className="bg-inherit outline-none"
                  id="nca"
                  {...register("nca")}
                />
              </div>
              <div className="my-2 border-b">
                <label htmlFor="mcb">MCb:</label>
                <input
                  type="text"
                  className="bg-inherit"
                  id="mcb"
                  {...register("mcb")}
                />
              </div>
              <div className="flex justify-between">
                <div className="border-b">
                  <label htmlFor="rows">Rows(N):</label>
                  <input
                    type="number"
                    id="rows"
                    min={2}
                    max={10}
                    onChange={onRowsChange}
                    className="bg-inherit w-16"
                  />
                </div>
                <div className="border-b">
                  <label htmlFor="cols">Cols(M):</label>
                  <input
                    type="number"
                    id="cols"
                    min={2}
                    max={10}
                    onChange={onColsChange}
                    className="bg-inherit w-16"
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
