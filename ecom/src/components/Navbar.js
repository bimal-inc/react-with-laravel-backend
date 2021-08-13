import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";




function Navbar() {

  const user= JSON.parse(localStorage.getItem('user-info'))
  const userhistory=useHistory();

  function Logout()
  {
    localStorage.clear();
    userhistory.push('/register')
  }
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            E-com Site
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              localStorage.getItem('user-info')?
              <>
              <li className="nav-item mx-3">
                <NavLink
                  exact
                  to="/add"
                  className="nav-link active bg-primary"
                  aria-current="page"
                >
                  Add Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/update" className="nav-link">
                  Update
                </NavLink>
              </li>
              </>
              :
              <>
              <li className="nav-item mx-3">
                <NavLink exact to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink exact to="/register" className="nav-link ">
                  Register
                </NavLink>
              </li>

              </>
            }
              

              
            </ul>

            {localStorage.getItem('user-info')?
            <div className="btn-group mr-3" >
  <button type="button" className="btn btn-danger dropdown-toggle "  data-bs-toggle="dropdown" >{ user && user.name } </button>
  <ul className="dropdown-menu ">
    <li><a className="dropdown-item " onClick={Logout} href="#">Logout</a></li>
  
  </ul>
</div>
:null
          }
          </div>
            
            //  {/* <!-- Example single danger button --> */}

        </div>
      </nav>
     
    </>
  );
}

export default Navbar;
