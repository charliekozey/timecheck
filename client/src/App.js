import React, {useState, useEffect} from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import LogIn from './components/LogIn';
import SignUp from './components/SideMenu';
import Home from './components/Home';
import MyPiecesDetail from './components/MyPiecesDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header />

        <Switch>
          {/* <Route exact path="/login">
            <LogIn />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route> */}

          {/* <Route exact path="/my-pieces">
            <MyPiecesDetail />
          </Route> */}
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;
