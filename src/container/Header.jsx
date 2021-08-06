import { Block } from '@material-ui/icons';
import React from 'react';

 function Header() {
    var newUser = null;
    newUser = localStorage.UserNickName;//.split(" ", 1)
    console.log(newUser)

    const logOut = () => {
        localStorage.clear()
        window.location.href="/"
    }
    const viewSaldo = (element) => {
        
    }
    return (
        <div className="header">
            <div class="logo">
                <span>Futcho</span>
                <p>La Quiniela</p>
            </div>
            <div className="profile" onClick={viewSaldo(this)}>
                <ul>
                    <li className="profile-user">
                        <span>{newUser}</span>
                        <div className="profile-photo"></div>
                        <ul className="profile-cuenta">
                            <li>Saldo ${localStorage.UserBalance}</li>
                            <li onClick={ logOut}>Logout</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;