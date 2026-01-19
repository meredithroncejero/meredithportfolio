import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificate from './pages/Certificate';
import Footer from './components/Footer';
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
