import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './About';
import Bookingpage from './components/Bookingpage';

function App() {
  return (
    <>
      <nav>
        <img src="assets/lemon-logo.png" alt="logo" />
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about-me">About</Link>
            <Link>Menu</Link>
            <Link to="/reservation">Reservations</Link>
            <Link>Order Online</Link>
            <Link>Login</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/reservation" element={<Bookingpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
