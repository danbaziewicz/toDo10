import React from "react";

const Input = ({ type, style, name, value, onChange }) => {
  return (
    <input
      className={style}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
