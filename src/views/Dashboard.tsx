// Counter.tsx
import React from 'react';
import { useStateValue } from '../store';
//import background from "../assets/img/service.png"

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
    <div className='container'>

      <div className="background-image" />


      <header>
        <p>Count: {state.count}</p>
      </header>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>



  );
};

export default Counter;
