import React, { FC } from 'react';
import {StateProvider} from './store/index';
import Dashboard from './views/Dashboard';

const App: FC = () => {
 
  return (
    <StateProvider>
    <div className="App">
    <div className="App">
        <header className="App-header">
          <h1>Counter Example</h1>
        </header>
        <Dashboard />
      </div>
    </div>
    </StateProvider>
  );
}

export default App;