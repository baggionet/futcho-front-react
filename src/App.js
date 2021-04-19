
import './App.css';
import Dashboard from './container/index';
import Login from './pages/Login';

import { Route, Switch, HashRouter} from 'react-router-dom';


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
          render={(props) => <Login {...props}/>}
        />
      </Switch>
    </HashRouter>
  )
}

export default App;
