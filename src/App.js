import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Events from './Events/Events';
import Error from './pages/Error/Error';
import Register from './components/UserRegister/Register';
import Login from './components/Userlogin/Login';
import Store from './BookStore/Store/Store';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
