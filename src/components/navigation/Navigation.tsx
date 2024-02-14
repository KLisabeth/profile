import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

interface NavItem {
  path: string;
  label: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navigation: React.FC<NavbarProps> = ({ items }) => {
  return (
    <Navbar expand="lg" >
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </Navbar>
  );
};

export default Navigation;
