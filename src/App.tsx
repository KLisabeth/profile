import React, { FC } from 'react';
import { StateProvider } from './store/index';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router'
import Navigation from './components/navigation/Navigation';

const App: FC = () => {

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/projects', label: 'Projects' },
    { path: '/about-me', label: 'About me' }
  ];

  return (
    <StateProvider>
      <BrowserRouter >
        <Navigation items={navItems} />

        <div id="content"></div>

        <Router />
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;