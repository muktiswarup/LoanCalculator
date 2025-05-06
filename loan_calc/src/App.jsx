import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ExchangeRate from './Pages/ExchangeRate';
import About from './Pages/About';
import Error from './Pages/Error';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exchange_rates_live' element={<ExchangeRate />} />
          <Route path='/about' element={<About />} />
          <Route path='/error_page' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;