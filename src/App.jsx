import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </Router>
  );
}

export default App;
