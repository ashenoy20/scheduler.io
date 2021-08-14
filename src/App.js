
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AuthContextProvider from "./AuthContextProvider";
import Login from './Login';


function App() {
  return (
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
  );
}

export default App;
