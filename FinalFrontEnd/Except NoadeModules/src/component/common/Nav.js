import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">
                KIU Smart Cafeteria
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to ={"/ItemStock"}>Order Stock</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to={"/"}>Order</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to ={"/ItemTable"}>Item Stock</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to ={"/"}>Billing</Link>
                    </li>
                </ul>
                
                <form className="d-flex" role="search">
                    <button className="btn btn-outline-success" type="submit"><Link to={"/LogOut"}>LogOut</Link></button>
                </form>
                    
                
            </div>
            
        </div>
    </nav> 
    
  )
}

export default Nav;
