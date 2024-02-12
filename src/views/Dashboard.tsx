// Counter.tsx
import React from 'react';
import { useStateValue } from '../store';

const Counter: React.FC = () => {
  const { state, dispatch } = useStateValue();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'SET_COUNT', payload: 0 });
  };

  return (
    <div>
      <div className="App">
        <div className="App">
          <header className="App-header">
            <p>Count: {state.count}</p>
          </header>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>


    </div>
  );
};

export default Counter;
