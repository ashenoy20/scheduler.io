import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AuthContextProvider from "./AuthContextProvider";
import Login from './Login';

import ApiCalendar from 'react-google-calendar-api';

function App() {
  return (
    <>
    <h1>hello</h1>
    <div>
      <Router>
        <AuthContextProvider>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/home"/>
          </Switch>
        </AuthContextProvider>
      </Router>
      
    </div>
    </>
  );
}

export default App;
