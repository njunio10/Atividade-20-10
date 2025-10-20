import { useState } from "react";
import "./App.css";

function App() {
  // 1. Estado MYSTATE que diminui -1 a cada clique
  const [myState, setMyState] = useState(0);

  // 2. Estado NAME que muda quando o botão é clicado
  const [name, setName] = useState("");

  // 3. Estado NEWCOUNTER que aumenta +1 até o limite de 10
  const [newCounter, setNewCounter] = useState(0);

  // Função para diminuir MYSTATE
  const handleMyStateClick = () => {
    setMyState((prev) => prev - 1);
  };

  // Função para mudar o nome
  const nome = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Carlos",
    "Julia",
    "Rafael",
    "Mariana",
    "Lucas",
    "Camila",
  ];
  const handleNameClick = () => {
    setName(() => {
      return nome[Math.floor(Math.random() * nome.length)];
    });
  };

  // Função para aumentar NEWCOUNTER
  const handleNewCounterClick = () => {
    setNewCounter((prev) => {
      if (prev < 10) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  return (
    <div className="exercise-container">
      <h1>Exercício de Estados React</h1>

      <div className="state-section">
        <h2 className="state-title">1. MYSTATE: {myState}</h2>
        <p className="state-description">Este valor diminui -1 a cada clique</p>
        <button onClick={handleMyStateClick} className="btn-decrease">
          Diminuir MYSTATE
        </button>
      </div>

      <div className="state-section">
        <h2 className="state-title">2. NOME: {name || "Vazio"}</h2>
        <p className="state-description">
          Este valor muda entre os nomes da lista a cada clique
        </p>
        <button onClick={handleNameClick} className="btn-change">
          Mudar Nome
        </button>
      </div>

      <div className="state-section">
        <h2 className="state-title">3. NEWCOUNTER: {newCounter}</h2>
        <p className="state-description">
          Este valor aumenta +1 até o limite de 10
        </p>
        <button onClick={handleNewCounterClick} className="btn-increase">
          Aumentar NEWCOUNTER
        </button>
      </div>
    </div>
  );
}

export default App;
