import Navbar from "./components/Navbar";
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/Navbar.css';
import SignupPage from './pages/SignupPage';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar/>
     <div className="container">
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Signup" element={<SignupPage/>} />
        <Route path="/Login" element={<Login/>}/>
        </Routes>
     </div>
    </div>
  );
}

export default App;
