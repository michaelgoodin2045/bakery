import './css/styles.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Locations from './Components/Locations';
import About from './Components/About';
import Store from './Components/Store';
import Contact from './Components/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
