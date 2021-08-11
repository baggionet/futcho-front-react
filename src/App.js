import React, { useState } from 'react'
import './App.css';
import Dashboard from './container/index';
import Login from './pages/Login';
import Registro from './pages/registro'

import { Route, Switch, HashRouter} from 'react-router-dom';
import { authContext } from "./context/loginContext";


function App() {

  const [ authToken, setAuthToken ] = useState();
  //console.log(data)
  const setToken = (data) => {
    const response = data.data.response;
    const token = data.data.token;

    localStorage.setItem("UserId", response.id);
    localStorage.setItem("UserName", response.name);
    localStorage.setItem("UserEmail", response.email);
    localStorage.setItem("UserNickName", response.nickName);
    localStorage.setItem("UserPhoto", response.photo);
    localStorage.setItem("UserRoll", response.rollId);
    localStorage.setItem("UserBalance", response.account.balance);
    localStorage.setItem("UserPreviousBalance", response.account.previousBalance);
    localStorage.setItem("token", token);
    setAuthToken(token);
  };
  return (
    <HashRouter>
      <authContext.Provider value={{authToken, setAuthToken: setToken}}>
        <Switch>
          <Route
            path="/admin"
            name="Dashboard"
            render={(props) => <Dashboard {...props}/>}
          />
          <Route
            path="/"
            name="Login" exact
            render={(props) => <Login {...props}/>}
          />
          <Route
            path="/registro"
            name="Registro" exact
            render={(props) => <Registro {...props}/>}
          />
        </Switch>
      </authContext.Provider>
    </HashRouter>
  );
}

export default App;
