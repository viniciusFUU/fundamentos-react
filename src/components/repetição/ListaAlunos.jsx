import React from "react";
import alunos from "../../Data/alunos";

export default props => {

  const lis = alunos.map((aluno) => {
    return (
        <li key={aluno.nome}>
            {aluno.id}) {aluno.nome} -> {aluno.nota}
        </li>
    )
  })

  return (
    <div>
      <ul style={{listStyle: 'none'}}>
        {lis}
      </ul>
    </div>
  );
};
