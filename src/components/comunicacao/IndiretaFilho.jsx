import React from "react";

export default (props) => {
  const min = 50;
  const max = 70;
  const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
  const gerarVerdadeiro = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(e) => {
          props.quandoClicar("João", gerarIdade(), gerarVerdadeiro());
        }}
      >
        Fornercer informações
      </button>
    </div>
  );
};
