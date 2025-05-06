import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ExchangeRate from "./Pages/ExchangeRate";
import About from "./Pages/About";
import Error from "./Pages/Error";
import { useTheme } from "./Context/ThemeContext";

function App() {
  const { themeStyles } = useTheme();

  return (
    <div style={themeStyles}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange_rates_live" element={<ExchangeRate />} />
          <Route path="/about" element={<About />} />
          <Route path="/error_page" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;