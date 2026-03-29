import React from "react";
import "../styles/input.css";

export const Inputtags = ({ type = "text", placeholder, onchg, name,value,id }) => {
  return (
    <>
      <input
        type={type}
        className="inputbox"
        placeholder={placeholder}
        onChange={onchg}
        name={name}
        value={value}
        id={id}
      />
    </>
  );
};
