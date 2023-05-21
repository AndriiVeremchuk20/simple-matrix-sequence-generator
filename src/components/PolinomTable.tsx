import React, { useCallback, useState } from "react";

export const PolinomTable = () => {
  const [show, setShow] = useState<boolean>(false);

  const onChecked = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setShow(e.target.checked);
  }, []);

  return (
    <div className="polinom-table">
      <label htmlFor="show" className="show-hide">
        Show polinom tables:
        <input type="checkbox" id="show" onChange={onChecked} />
      </label>
      {show ? (
        <div className="image">
          <img src="./img/polinoms.jpg" alt="polinoms" width={"600px"} />
          <div className="title">Fig - Table of unidentified polynomials</div>
        </div>
      ) : null}
    </div>
  );
};
