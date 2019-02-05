import React from "react";
import spinner from "../../img/loading.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="Loding..."
        style={{
          width: "80px",
          top: "400px",
          margin: "200px auto"
        }}
      />
    </div>
  );
}
