import React from 'react';
import Header from './Components/Header';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from'./Components/Home';
import About from'./Components/About';
import PageNotFound from'./Components/Record';
import Counters from './Components/UseReducer';
import Context from './Components/UseContext';
import Service from './Components/UseParams';
import History from './Components/UseHistory';

function App(){
  return(
     <div ClassName="Container"> 
      <Header/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/Counters" component={Counters}/>
      <Route path="/Context" component={Context}/>
      <Route path="/Service/:id" component={Service}/>
      <Route path="/History/:id" component={History}/>
      <Redirect from="/Counter" to="Counters"/>
     <Route component={ PageNotFound}/>
     </Switch>
    </div>
  );
}
 export default App;
