import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Projects from '../views/Projects';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    );
};

export default Router;

