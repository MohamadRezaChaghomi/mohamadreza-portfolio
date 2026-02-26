import React from "react";

const Card = ({ children, className = "" }) => (
  <div className={`glass rounded-2xl shadow-lg p-6 ${className}`}>
    {children}
  </div>
);

export default Card;