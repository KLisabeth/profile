import React, { FC } from 'react';
import { StateProvider } from './store/index';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router'
import Navbar from './components/navigation/Navbar';

const App: FC = () => {

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/projects', label: 'Projects' },
    { path: '/about-me', label: 'About me' }
  ];

  return (
    <StateProvider>
      <BrowserRouter >
        <Navbar items={navItems} />
        <Router />
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;