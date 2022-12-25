import React from 'react';
import { Link , useNavigate } from "react-router-dom";
function Navbar() {
    let user = localStorage.getItem('user');
    let navigate = useNavigate();
    function Logout(){
        localStorage.clear()
        navigate("/login")
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div  className="navbar-brand" >
                <Link className="nav-link active"  to="/">Home</Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    {!user ? <><li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li></> : <><li className="nav-item">
                        <Link className="nav-link" to="/user">({user})</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" onClick={Logout}>Logout</Link>
                    </li></> }

                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
