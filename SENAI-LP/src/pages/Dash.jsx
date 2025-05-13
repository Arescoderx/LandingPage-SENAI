import React, { useState, useEffect } from 'react';

function Dash() {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/cadastros')
      .then((response) => response.json())
      .then((data) => setCadastros(data))
      .catch((error) => console.error('Erro ao carregar os dados:', error));
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <h2>Cadastro de Usuários</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Telefone</th>
            <th scope="col">Curso</th>
            <th scope="col">Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {cadastros.length > 0 ? (
            cadastros.map((cadastro) => (
              <tr key={cadastro.id}>
                <td>{cadastro.nome}</td>
                <td>{cadastro.email}</td>
                <td>{cadastro.telefone || 'Não informado'}</td>
                <td>{cadastro.curso}</td>
                <td>{cadastro.mensagem}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Carregando...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dash;