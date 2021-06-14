import React, { useState } from 'react';  
import{Link} from "react-router-dom";
  
function Home() {  
  // Declare a new state variable, which we'll call "count"  
  // Array destructuring
  //count-initial value(0), setCount-function incrementing the value
  const [count, setCount] = useState(0);  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>
      <p>Welcome to useState</p>
      <button onClick={() => setCount(count + 1)}>  
        Click the button  
      </button> 
      <p> 
      <Link to ="About" ClassName="Const">
       Redirect
      </Link>
      </p>

    </div>  
  );  
}  
export default Home ; 