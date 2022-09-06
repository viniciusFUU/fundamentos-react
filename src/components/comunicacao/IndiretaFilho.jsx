import React from "react";

export default (props) => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={
         (e) => {
            props.quandoClicar ('João', 53, true)
      }}>
        Fornercer informações
      </button>
    </div>
  );
};
