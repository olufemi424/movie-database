import React from "react";
import spinner from "../../img/loading.gif";

export default function Spinner() {
  return (
    <div className="loading__spinner">
      <img src={spinner} alt="Loding..." className="loading__spinner-img" />
    </div>
  );
}
