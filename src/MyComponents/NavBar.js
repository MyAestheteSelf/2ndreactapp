import React from 'react';
import '../css/nav-bar.css'

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
export const NavBar = (props) => {
    return (
        <div className="nav-bar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
            </div>
            <div className="brand-name">
                {props.hasName?<h2>{props.title}</h2>:""}
            </div>
        </div>
    )
}
