import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';
import TeamPage from './pages/TeamPage';
import ProjectsPage from './pages/ProjectsPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;