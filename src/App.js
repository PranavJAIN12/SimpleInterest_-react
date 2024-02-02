
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import SimpleInt from './components/SimpleInt';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar title="Simple Interest" />
        <Routes>
          <Route path="/" element={<SimpleInt />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
