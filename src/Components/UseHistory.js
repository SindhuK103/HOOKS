import React, {useParams,useHistory} from "react-router-dom";
  
  const History = () => {
    const history = useHistory();
    const params = useParams();
    let { id } = useParams();
  
    const handleBack = () => {
      history.goBack();
    };
  
    const handleNavigation = () => {
      history.push("/History/5");
    };
  
    return (
      <div>
        <div>This is the History page</div>
        <div>current History Id - {params.id}</div>
        <div>
          <button onClick={handleBack}>Go Back</button>
        </div>
        <div>
          <button onClick={handleNavigation}>Go To Different History page</button>
        </div>
      </div>
    );
  };

   export  default History;