import logo from './logo.svg'; // way 1 import img 
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Examples from './pages/Examples';
import Contact from './pages/Contact';
/* Header component */
function Header(props) {
  return (
    <div className='flex'>
      <div className='logo'>
        <img src={process.env.PUBLIC_URL + logo} alt="Logo" width={100} height={100} />
      </div>
      <h1 >Site Header {props.name} use { props.color}</h1>
    </div>
  )
}
function App() {
  return (
    <div className='root-wrapper'>
      
      <Header  name="Amit" color="purple" />
      <Nav item1="Home" item2="About Me" item3="Examples" item4="Contact Us" />
      <div className='img-center'>
        <img
        src={require("./assets/Category_Japanese-Apartment-Life.png")} 
        alt="Banner" />
      </div>
      
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
      
      
      <Footer />

    </div>
  );
}
export default App;
