import React, { FC } from 'react';
import { StateProvider } from './store/index';
import Dashboard from './views/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router'
import Navbar from './components/navigation/Navbar';

const App: FC = () => {

  return (
    <StateProvider>
      <BrowserRouter >
        <Navbar />
        <div className="App">
          <div className="App">
            <header className="App-header">
              <h1>Counter Example</h1>
            </header>
            <Dashboard />
          </div>
        </div>
        <Router />
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;