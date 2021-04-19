import * as React from 'react';
import {DashboardContex} from './index';

export default function() {
    const { history, routes} = React.useContext(DashboardContex);

    return (
        <div className="sidebar">
            {routes.map((item, idx) => {
                return(
                    <div 
                        key={idx} 
                        onClick={() => history.push(`${item.path}`)}
                        className="sidebar-item"
                    >
                      <span className="item-icon">{item.icon}</span> {item.name}
                    </div>
                );
            })}
        </div>
        );
}