import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addcourse from './components/Addcourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Addcourse/>}/>
      <Route path="/view" exact element={<View/>}/>
  
    
      
     
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
