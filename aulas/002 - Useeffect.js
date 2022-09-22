import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // ComponentDidUpdate - Executa toda vez que o componente atualiza;
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });

  // ComponentDidMount - Executa 1x;
  useEffect(() => {
    console.log('ComponentDidMount');
  }, []);

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // Com depedência - Executa toda vez que a depedência mudar;
  useEffect(() => {
    console.log('C1: ', counter, 'C2: ', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <p>
        <button type="button" onClick={() => setCounter(counter + 1)}>
          Incrementar Contador 1
        </button>
      </p>
      <p>
        <button type="button" onClick={() => setCounter2(counter2 + 1)}>
          Incrementar Contador 2
        </button>
      </p>
    </div>
  );
}

export default App;
