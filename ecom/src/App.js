
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Addprod from "./components/Addprod"
import Login from "./components/Login"
import Update from "./components/Update"
import Register from "./components/Register"
import Protectedroute from './components/Protectedroute';



function App() {
  return (
    
    <BrowserRouter>
    
    <Route path="/add" >
     
      <Protectedroute Cmp={Addprod}/>

    </Route>
    <Route path="/login" >

    <Login />

    </Route>
    <Route path="/register">

    <Register  />

    </Route>
    <Route path="/update">
      <Protectedroute Cmp={Update}/>

    

    </Route>

    </BrowserRouter>
    
  );
}

export default App;
