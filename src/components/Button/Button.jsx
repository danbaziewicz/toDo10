import React from "react";

const Button = ({ onClick, style, txtBtn }) => {
  return (
    <button onClick={onClick} className={style}>
      {txtBtn}
    </button>
  );
};

export default Button;
