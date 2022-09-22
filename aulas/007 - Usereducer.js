/* eslint-disable */
import { useReducer } from 'react';
import './App.css';

const initialState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'mudar': {
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  console.log('NENHUMA ACTION ENCONTRADA...');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}{' '}
      </h1>
      <p>
        <button onClick={() => dispatch({ type: 'mudar', payload: new Date().toLocaleString('pt-BR'), })}>Clicar Mudar</button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'inverter' })}>Clicar inverter</button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'QUALQUERCOiSA' })}>
          Clicar Sem Ação
        </button>
      </p>

    </div>
  );
}

export default App;
