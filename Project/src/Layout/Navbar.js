import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar=()=>{
 return(
      <nav className='navbar'>
     <div className='nav-grid'>
         <div className='left-side'>
         <p className='seaside'>Seaside</p>
         <p className='Cottages'>Cottages</p>
        </div>
        <div className='right-side' >
         <Link to="/">Home</Link>
         <Link to="/Offers">Offers</Link>
         <Link to="/Gallary">Gallery</Link>
         <Link to="/Contact">Contact</Link>
         <Link to="/Openion">Openion</Link>
         </div>
     </div>
      </nav>
 );
}
export default Navbar;