import * as math from "mathjs";

export const GetCoefficientMatrix = (C: string) => {
  let size = C.length - 1;
  let mat = math.zeros([size, size]);
  for (let i = 1; i < size; i++) {
    mat = math.subset(mat, math.index(i, i - 1), 1);
  }
  for (let i = 0; i < size; i++) {
    mat = math.subset(mat, math.index(0, i), parseInt(C[size - i]));
  }
  return mat;
};

export const onModulate = (
  NCa: string,
  MCb: string,
  N: number,
  M: number,
  Matrix: Array<Array<number>>
) => {
    console.log(NCa, MCb, N, M, Matrix);
  let Ca = NCa;
  let Cb = MCb;
  let A = GetCoefficientMatrix(Ca);
  let B = math.transpose(GetCoefficientMatrix(Cb));
  let seed = math.matrix(Matrix) as any;

  let n = N;
  let m = M;
  let T = (Math.pow(2, n) - 1) * (Math.pow(2, m) - 1);
  let k = 0;
  let curr = seed._data;
  let allStates = [];
  allStates.push(curr);
  curr = math.multiply(math.multiply(A, curr), B);
  do {
    curr = math.multiply(math.multiply(A, curr), B);
    let c = curr;
    for (let i = 0; i < c.length; i++) {
      for (let j = 0; j < c[i].length; j++) {
        c[i][j] = c[i][j] % 2;
      }
    }
    allStates.push(curr);
    k++;
  } while (curr !== seed && k !== T-1);
  return {allStates: allStates, T: T-1};
};
