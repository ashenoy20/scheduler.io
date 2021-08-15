
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import AuthContextProvider from "./AuthContextProvider";
import { useContext } from "react";
import Login from './Login';
import { AuthContext } from "./AuthContextProvider";
import Home from "./Home";

import ApiCalendar from 'react-google-calendar-api';


function App() {

  return (
    <div>

      <Router>
        <AuthContextProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home}/>
          </Switch>
        </AuthContextProvider>
      </Router>
      
    </div>
  );
}

export default App;
