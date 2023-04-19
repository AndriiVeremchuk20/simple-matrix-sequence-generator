import React, { ChangeEvent, useCallback, useState } from 'react'
import "./Msr.scss";
import InputMatrix from '../../components/InputMatrix/InputMatrix';

type MatrixParams = {
  rows: number;
  cols: number;
};

export const Msr = () => {
  const [matrixParams, setMatrixParams] = useState<MatrixParams>({cols: 2, rows: 2});

  const onRowsChange = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
    const {value} = e.target;
    setMatrixParams(prev => ({...prev, rows: parseInt(value)}));
  },[]);

  const onColsChange = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
    const {value} = e.target;
    setMatrixParams(prev => ({...prev, cols: parseInt(value)}));
  },[]);


  return (
    <div>
      <>{console.log(matrixParams)}</>
       <div className="container">
      <div className="lsr">
        <div>instruction video or gif</div>
        <div>
          <div>
            <label htmlFor="rows">Rows:</label>
            <input type="number" id="rows" min={2} max={10} onChange={onRowsChange}/>
          </div>
          <div>
          <label htmlFor="cols">Cols:</label>
            <input type="number" id="cols" min={2} max={10} onChange={onColsChange}/>
          </div>
        </div>
        <InputMatrix cols={matrixParams.cols} rows={matrixParams.rows}/>
      </div>
    </div>
    </div>
  )
}
