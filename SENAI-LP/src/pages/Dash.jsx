import React, { useEffect, useState } from 'react';

const Dash = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/cadastros')
      .then(res => res.json())
      .then(setCadastros)
      .catch(err => console.error('Erro ao carregar os dados:', err));
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <h2>Cadastro de Usuários</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Curso</th>
            <th>Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {cadastros.map(({ id, nome, email, telefone, curso, mensagem }) => (
            <tr key={id}>
              <td>{nome}</td>
              <td>{email}</td>
              <td>{telefone}</td>
              <td>{curso}</td>
              <td>{mensagem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dash;