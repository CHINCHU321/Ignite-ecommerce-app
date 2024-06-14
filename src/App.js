import Navbar from "./components/Navbar";
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/Navbar.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <div className="container">
        <Routes>
        <Route path="/" exact component={Home}/>

        </Routes>
     </div>
    </div>
  );
}

export default App;
