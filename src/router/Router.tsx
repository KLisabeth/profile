import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Projects from '../views/Projects';
import MyBio from '../components/bio/MyBio';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<MyBio />} />
        </Routes>
    );
};

export default Router;

