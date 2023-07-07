import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Copas from './pages/Copas';
import { Route } from 'react-router-dom';
import './App.css'; 
//import DefaultImage from './DefaultImage';

function App() {
  return (
    <Router>
      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/copas">COPAS</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/copas" element={<Copas />} />
       
      </Routes>
    </Router>
  );
}
 // <Route path="*" element={<DefaultImage />} />
export default App;
