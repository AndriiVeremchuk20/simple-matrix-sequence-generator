import React, { ChangeEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { onModulate } from "./utils/matrix";
import InputMatrix from "./components/InputMatrix";
import { PolinomTable } from "./components/PolinomTable";
import PrintMatrix from "./components/PrintMatrix";
import { Header } from "./layout/Header";
import { ShowSteps } from "./components/ShowSteps";

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
  A: any;
  B: any;
};

export const App = () => {
  const [matrixParams, setMatrixParams] = useState<MatrixParams>({
    cols: 0,
    rows: 0,
  });
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const { register, handleSubmit } = useForm<FormParams>();

  const onRowsChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) setMatrixParams((prev) => ({ ...prev, rows: parseInt(value) }));
  }, []);

  const onColsChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) setMatrixParams((prev) => ({ ...prev, cols: parseInt(value) }));
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
      alert("error (check fields)");
    }
  });

  const onReset = useCallback(() => {
    setMatrixParams({ cols: 2, rows: 2 });
    setResult(null);
  }, []);

  return (
    <div>
      <Header />
      <div className=" bg-gradient-to-r from-cyan-700 to-blue-500 dark:to-blue-900 min-h-screen max-h-fit flex justify-center">
        <div className="pt-[100px] bg-neutral-300 dark:bg-neutral-900 dark:bg-opacity-70 bg-opacity-70 w-5/6 dark:text-white">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex justify-around">
              <PolinomTable />
              <form
                className="form h-fit w-fit p-4 bg-slate-500 bg-opacity-20 flex flex-col items-center gap-3 "
                onSubmit={onSubmit}
                onReset={onReset}
              >
                <h3 className="font-bold ">Matrix Generator</h3>
                <div className="my-2 border-b">
                  <label htmlFor="nca">NCa:</label>
                  <input
                    type="text"
                    className="bg-inherit outline-none border-none ml-4"
                    id="nca"
                    {...register("nca")}
                  />
                </div>
                <div className="my-2 border-b">
                  <label htmlFor="mcb">MCb:</label>
                  <input
                    type="text"
                    className="bg-inherit outline-none border-none ml-4"
                    id="mcb"
                    {...register("mcb")}
                  />
                </div>
                <div className="flex justify-between w-full">
                  <div className="border-b">
                    <label htmlFor="rows">Rows(N):</label>
                    <input
                      type="number"
                      id="rows"
                      min={0}
                      max={10}
                      onChange={onRowsChange}
                      className="ml-3 bg-inherit w-16"
                    />
                  </div>
                  <div className="border-b">
                    <label htmlFor="cols">Cols(M):</label>
                    <input
                      type="number"
                      id="cols"
                      min={0}
                      max={10}
                      onChange={onColsChange}
                      className="ml-3 bg-inherit w-16"
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
                <div className="w-full flex justify-around">
                  <button
                    type="reset"
                    className="w-[100px] bg-green-500 px-2 py-1 text-black font-bold hover:text-white"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="w-[100px] bg-green-500 px-2 py-1 text-black font-bold hover:text-white"
                  >
                    Calc
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            {result ? (
              <div className="mt-5 w-full py-10 flex flex-col items-center bg-slate-500 bg-opacity-20">
                <h2 className="font-bold text-xl">Result</h2>
                <div className="">
                  <div className="flex gap-3 bg-neutral-200 bg-opacity-30 p-4">
                    <div className="flex gap-2 px-3 border-r-2">
                      <div className="font-bold">Matrix A:</div>
                      <div>
                        {<PrintMatrix matrix={result.A as number[][]} />}
                      </div>
                    </div>

                    <div className="flex gap-2 px-3 border-r-2">
                      <div className="font-bold">Matrix B:</div>
                      <div>
                        {<PrintMatrix matrix={result.B as number[][]} />}
                      </div>
                    </div>
                    <div className="flex gap-2 px-3 border-r-2">
                      <div className="font-bold" title="period">
                        T:
                      </div>
                      <div>{result.T}</div>
                    </div>

                    <div className="mx-3">
                      <ShowSteps matrixArr={result.allStates} />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
