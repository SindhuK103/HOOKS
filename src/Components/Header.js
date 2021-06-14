import React from 'react';
import {Link }from 'react-router-dom';

function Header(){
    return(
        <nav>
            <ul>
           <li><Link to ="/"> Home </Link>  </li> 
           <li><Link to ="/About"> About </Link> </li>
           <li> <Link to ="/Counter"> Counter </Link> </li> 
           <li> <Link to ="/Context"> Context</Link> </li> 
           <li> <Link to ="/Service"> Service</Link> </li> 
           <li> <Link to ="/History"> History</Link> </li> 
            </ul> 
        </nav>
    );
}

export default Header;
