import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import AuthContextProvider from "./AuthContextProvider";
import { useContext } from "react";
import Login from './Login';
import { AuthContext } from "./AuthContextProvider";
import Home from "./Home";

import ApiCalendar from 'react-google-calendar-api';
import Teacher from "./Teacher";
import TeacherHome from "./TeacherHome";


function App() {

  return (
    <div>

      <Router>
        <AuthContextProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home}/>
            <Route path="/teacherSignUp" component={Teacher}/>
            <Route path="/teacherHome" component={TeacherHome}/>
          </Switch>
        </AuthContextProvider>
      </Router>
      
    </div>
  );
}

export default App;


