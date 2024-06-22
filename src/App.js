import Navbar from "./components/Navbar";
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/Navbar.css';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <div className="container">
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/signup" component={SignupPage} />

        </Routes>
     </div>
    </div>
  );
}

export default App;
