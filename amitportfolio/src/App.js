import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './pages/calculator';
import Mapex from './pages/mapex';
import DessertsList from './pages/DessertsList';
import ReverseTodo from './pages/ReverseTodo';
import { Link } from "react-router-dom";
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];
function Nav(props) {
  return (
      <nav className="main-nav">
          <ul>
              <li><Link to="/" className="nav-item" >{props.item1}</Link> </li>
              <li><Link to="/calculator" className="nav-item" >{props.item2}</Link></li>
              <li><Link to="/mapex" className="nav-item" >{props.item3}</Link></li>
              <li><Link to="/reversetodo" className="nav-item" >{props.item4}</Link></li>
              
          </ul>
      </nav>
  );
};

function App() {
  return (
    <div className='root'>
      <header className="header">
        <img src={logo} className="App-logo-5" alt="logo" width={100} />
      </header>
      <Nav item1="Home" item2="Calculator" item3="Mapex" item4="ReverseTodo" />
      <main>
        <DessertsList data={desserts} />
        <Routes>
          
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/mapex" element={<Mapex />} />
          <Route path="/reversetodo" element={<ReverseTodo  />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
