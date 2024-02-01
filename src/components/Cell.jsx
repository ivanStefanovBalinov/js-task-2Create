import React from "react";
import "../Styles/Cell.css";

export default function Cell({ onClick, ref, id, className }) {
  return (
    <div onClick={onClick} ref={ref} id={id} className={`cell ${className}`}>
      <span></span>
    </div>
  );
}
