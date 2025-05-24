import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import DocumentTitle from './components/DocumentTitle';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <DocumentTitle />
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Other routes will be added later */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
