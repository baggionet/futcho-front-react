import logo from './logo.svg';
import './App.css';
import Dashboard from './container';
import Login from './pages/Login';

import { Route, Switch, HashRouter, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route
          path="/admin"
          name="Dashboard"
          render={(props) => <Dashboard {...props}/>}
        />
        <Route
          path="/"
          name="Login" exact
          render={(props) => <Login/>}
        />
      </Switch>
    </HashRouter>
  )
}

export default App;
