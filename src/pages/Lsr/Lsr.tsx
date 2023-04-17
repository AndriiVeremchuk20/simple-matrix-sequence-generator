import React from "react";
import "./Lsr.scss";
import { Resolver, useForm } from "react-hook-form";

interface lsr {
  n: number;
  c: string;
  y: string;
}

function GetResult({n, c, y}: lsr){  
  let N = n; 
  let C = c;
  let Y = y;

  // check if Cn * C0 = 1
  if(C[0] != C[N] || C[0] != '1') {
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
    for(let i = N - 1; i >= 0; i--) { // for every cell
      let currStr = curr.toString(2); // to binary string curr
      while(currStr.length < N) { // align to N bits
        currStr = "0" + currStr;
      }
      //console.log(i + C[i+1] + currStr[i]);
      if(C[i + 1] == '1' && currStr[i] == '1') { // actual sum calculation
        s ^= 1;
      }
    }

    curr = curr >> 1;
    
    curr |= (s << (N - 1));

    T++;

    bin += (curr & 1).toString();

    arr.push(curr);

    j++;
    if(j >= Math.pow(2, N)) {
      break;
    }
  } while(curr != base);

  return {
    arr: arr, 
    bin: bin,
    T: T,
  }
}

export const Lsr = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<lsr>();
  const onSubmit = handleSubmit((data) => console.log(GetResult(data)));

  return (
    <div className="container">
      <div className="lsr">
        <div>instruction</div>
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <label>*N: </label>
              <input type="number" required min={0} max={16} {...register("n")} />
            </div>
            <div>
              <label>*C: </label>
              <input type="text" required pattern="[0-1]{2,16}" {...register("c")} />
            </div>
            <div>
              <label>*Y: </label>
              <input type="text" required pattern="[0-1]{2,16}" {...register("y")} />
            </div>
            <button type="submit">Calc</button>
            <button type="reset">Reset</button>
          </form>
        </div>
        <div>result</div>
      </div>
    </div>
  );
};

/*
const n = document.getElementById("n");
const c = document.getElementById("c");
const y = document.getElementById("y");
const result = document.getElementById("res");
const resButton = document.getElementById('resultButton');

function GetResult(){  
  let N = parseInt(n.value); 
  let C = c.value;
  let Y = y.value;

  // check if Cn * C0 = 1
  if(C[0] != C[N] || C[0] != '1') {
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
    for(let i = N - 1; i >= 0; i--) { // for every cell
      currStr = curr.toString(2); // to binary string curr
      while(currStr.length < N) { // align to N bits
        currStr = "0" + currStr;
      }
      //console.log(i + C[i+1] + currStr[i]);
      if(C[i + 1] == '1' && currStr[i] == '1') { // actual sum calculation
        s ^= 1;
      }
    }

    curr = curr >> 1;
    
    curr |= (s << (N - 1));

    T++;

    bin += (curr & 1).toString();

    arr.push(curr);

    j++;
    if(j >= Math.pow(2, N)) {
      break;
    }
  } while(curr != base);

  result.innerHTML = "Numbers : " + arr + "<br>Bin string : " + bin + "<br>(Period) T : " + T;
}

function CheckData() {
  let regExp = new RegExp("[0-1]{2,16}");
  return n.value && c.value && y.value && regExp.test(c.value) && regExp.test(y.value);
}

resButton.addEventListener('click',()=>{
  result.textContent = "";

  if(CheckData()){
    GetResult();
  } 
  else{
    result.textContent = "Не все строки заполнены или 2 и 3 поля содержат не бинарные значения";
  }
});

*/
