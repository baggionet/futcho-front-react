import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './css/style.css'

export default function() {
    return (
        <div className="container">
            <Header/>
            <div className="main">
                <Sidebar/>
            </div>
            
        </div>
    );
}
