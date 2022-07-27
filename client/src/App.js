import React, {useState, useEffect} from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import SignupDesigner from './components/SignupDesigner';
import Login from "./components/Login";
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(()=>{
    fetch('/users')
    .then(res => res.json())
    .then(data => setCurrentUser(data["users"][0]))
      }, [])
  
  function onLogout() {
    setCurrentUser(null)
  }

  return (

      <div className="App">
        
        <Header displayName = {currentUser.display_name} />

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup-designer">
            <SignupDesigner />
          </Route>
          
          <Route path="/">
            <Home currentUser={currentUser} />
          </Route>
        </Switch>


      </div>
  );
}

export default App;
