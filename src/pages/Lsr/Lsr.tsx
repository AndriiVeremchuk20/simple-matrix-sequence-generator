import React, { useState } from "react";
import "./Lsr.scss";
import { useForm } from "react-hook-form";

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

  // check if Cn * C0 = 1
  if (C[0] !== C[N] || C[0] !== "1") {
    alert("Cn * C0 != 1");
    return;
  }

  // create basic vars
  let arr = []; // all nums will be here
  let base = parseInt(Y, 2); // parse base number
  let curr = base; // curr is base from the start
  let bin = ""; // bin string goes here

  arr.push(curr); // first element of our streak is base (seed) element

  let T = 0; // we calculate period
  let j = 0;
  do {
    //console.log(curr);
    // calc sum
    let s = 0;
    for (let i = N - 1; i >= 0; i--) {
      // for every cell
      let currStr = curr.toString(2); // to binary string curr
      while (currStr.length < N) {
        // align to N bits
        currStr = "0" + currStr;
      }
      //console.log(i + C[i+1] + currStr[i]);
      if (C[i + 1] === "1" && currStr[i] === "1") {
        // actual sum calculation
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

  return (
    <div className="container">
      <div className="lsr">
        <div>instruction video or gif</div>
        <form onSubmit={onSubmit} className="form">
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
        <div>
          {result ? (
            <>
              <div>T: {result.T}</div>
              <div>Arr: {result.arr}</div>
              <div>Bin: {result.bin}</div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
