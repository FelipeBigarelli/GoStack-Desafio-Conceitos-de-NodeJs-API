import React, { useState, useEffect } from "react";
import api from './services/api'
import "./styles.css";

function App() {
const [repositories, setRepositories] = useState([]);

useEffect(() => {
  api.get('/repositories').then(response => {
    setRepositories(response.data);
  })
})  

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title: "Felipe Bigarelli",
      url: 'https://github.com/FelipeBigarelli',
      techs: ["ReactJS", "NodeJS", "React Native ;D"]
    });

    setRepositories([...repositories, response.data]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          {repositories.map(repository => {
            <li key={repository.id}>{repository.title}</li>
          })}

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
