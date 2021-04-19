import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { routes } from '../utils/routes';
import { Switch, Route} from 'react-router-dom'; 
import './css/style.css';

export const DashboardContex = React.createContext();

export default function({history}) {
    return (
        <div className="container">
            <DashboardContex.Provider value={{history, routes} }>
                <Header/>
                <div className="container-body">
                    <Sidebar/>
                    <div className="main">
                        <React.Suspense fallback={"Cargando..."}>
                            <Switch>
                                {routes.map((route, idx) => {
                                    return route.component ? (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => <route.component{...props}/>}
                                        />
                                    ) : null;
                                })
                                }
                            </Switch>
                        </React.Suspense>
                    </div>
                </div>

            </DashboardContex.Provider>           
        </div>
    );
}
