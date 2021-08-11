
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Addprod from "./components/Addprod"
import Login from "./components/Login"
import Update from "./components/Update"
import Register from "./components/Register"



function App() {
  return (
    <BrowserRouter>
    <Route>

    <Navbar />

    </Route>
    <Route path="/add" >

    <Addprod />

    </Route>
    <Route path="/login" >

    <Login />

    </Route>
    <Route path="/register">

    <Register  />

    </Route>
    <Route path="/update">

    <Update  />

    </Route>

    </BrowserRouter>
    
  );
}

export default App;
