import React, { useCallback, useState } from "react";
import "./Lsr.scss";
import { useForm } from "react-hook-form";
import { PolinomTable } from "../../components/PolinomTable/PolinomTable";

interface lsr {
  n: number;
  c: string;
  y: string;
}

interface lsrRes {
  arr: Array<number>;
  bin: string;
  T: number;
}

function GetResult({ n, c, y }: lsr) {
  let N = n;
  let C = c;
  let Y = y;

  if (C[0] !== C[N] || C[0] !== "1") {
    alert("Cn * C0 != 1");
    return;
  }

  let arr = [];
  let base = parseInt(Y, 2);
  let curr = base;
  let bin = "";
  arr.push(curr);

  let T = 0;
  let j = 0;
  do {
    let s = 0;
    for (let i = N - 1; i >= 0; i--) {
      let currStr = curr.toString(2);
      while (currStr.length < N) {
        currStr = "0" + currStr;
      }
      if (C[i + 1] === "1" && currStr[i] === "1") {
        s ^= 1;
      }
    }
    curr = curr >> 1;
    curr |= s << (N - 1);
    T++;
    bin += (curr & 1).toString();
    arr.push(curr);
    j++;
    if (j >= Math.pow(2, N)) {
      break;
    }
  } while (curr !== base);

  return {
    arr: arr,
    bin: bin,
    T: T,
  };
}

export const Lsr = () => {
  const [result, setResult] = useState<lsrRes | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<lsr>();
  const onSubmit = handleSubmit((data) => {
    const res = GetResult(data);
    console.log(res);
    if (res) {
      setResult(res);
    }
  });

  const onReset = useCallback(() => {
    setResult(null);
  }, []);

  return (
    <div className="container">
      <div className="lsr">
        <div>instruction video or gif</div>
        <div className="form-data">
          <form onSubmit={onSubmit} onReset={onReset} className="form">
            <div className="form-header">LSR-calculator</div>
            <div className="form-item">
              <label htmlFor="n">*N: </label>
              <input
                id="n"
                type="number"
                placeholder="0-16"
                required
                min={0}
                max={16}
                {...register("n")}
              />
            </div>
            <div className="form-item">
              <label htmlFor="c">*C: </label>
              <input
                id="c"
                type="text"
                placeholder="111101"
                required
                pattern="[0-1]{2,16}"
                {...register("c")}
              />
            </div>
            <div className="form-item">
              <label htmlFor="y">*Y: </label>
              <input
                id="y"
                type="text"
                placeholder="1010"
                required
                pattern="[0-1]{2,16}"
                {...register("y")}
              />
            </div>
            <div className="btn-group">
              <button type="reset">Reset</button>
              <button type="submit">Calc</button>
            </div>
          </form>
          <div className="table">
            <PolinomTable />
          </div>
        </div>
        <div>
          {result ? (
            <div className="results">
              <h2>Results:</h2>
              <div className="result-item">
                <div className="result-label">T:</div>
                <div>{result.T}</div>
              </div>
              <div className="result-item">
                <div className="result-label">Arr:</div>
                <div className="result-arr">
                  {result.arr.map((item, index) => (
                    <div key={index} className="arr-item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="result-item">
                <div className="result-label">Bin:</div>
                <div className="result-arr">
                  {result.bin.split("").map((bit, index) => (
                    <div
                      key={index}
                      className={`arr-item ${bit === "1" ? "marked" : ""}`}
                    >
                      {bit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
