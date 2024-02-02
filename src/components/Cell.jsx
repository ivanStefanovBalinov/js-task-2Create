import React from "react";
import "../Styles/Cell.css";

export default function Cell({ onClick, className, style }) {
  return (
    <div style={style} onClick={onClick} className={`cell ${className}`}>
      <span></span>
    </div>
  );
}
