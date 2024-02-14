import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dashboard and Navbar with correct items', () => {
  render(<App />);

  // Check if Dashboard component is rendered
  const dashboardElement = screen.getByText(/Dashboard/i);
  expect(dashboardElement).toBeInTheDocument();

  // Check if Navbar component is rendered with correct items
  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/projects', label: 'Projects' },
    { path: '/about-me', label: 'About me' }
  ];

  navItems.forEach(item => {
    const navItemElement = screen.getByText(item.label);
    expect(navItemElement).toBeInTheDocument();
  });
});
