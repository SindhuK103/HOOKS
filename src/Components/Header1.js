import React from 'react';
import {NavLink} from 'react-router-dom';

function Head() {
    return(
        <root>  
            <ul>
           <li> <NavLink to ="/"  exact> Home</NavLink></li>
           <li> <NavLink to ="/About" > About</NavLink></li>
           <li> <NavLink to ="/Counter" > Counter</NavLink></li> 
           <li> <NavLink to ="/Context" > Context</NavLink></li> 
           <li> <NavLink to ="/Service" > Service</NavLink></li> 
           <li> <NavLink to ="/History" >History</NavLink></li> 
           </ul>
        </root>
    );
}

export default Head;