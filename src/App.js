import "./App.css";
import Home from "./components/Home";
import Footer1 from "./components/Footer1";
//import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";

function App() {
  return (
    <div>
      <Router>
        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<Aboutus/>} />
            <Route path="/contact" element={<Contactus/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        <Footer1 />
      </Router>
    </div>
  );
  
}

export default App;
