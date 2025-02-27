import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/Home';
import CV from './pages/CV';
import Projects from './pages/Projects';
import Socials from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Socials />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
