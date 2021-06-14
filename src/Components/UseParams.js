import React from 'react';
import {useParams} from "react-router-dom";
  
  // /Service/id
  function Service() {
    const params = useParams();
    let { id } = useParams();

  
    return (
      <div>
        <h2>This is the service page</h2>
        <h2>present id - {params.id=1}</h2>
        <h2>Requested id: {id}</h2>
      </div>
    );
  };

  export default Service;