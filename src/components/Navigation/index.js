import React from 'react';
import { NavLink} from 'react-router-dom';


export default function Navigation() {
    return (
   
        <nav className="navigation">
                <NavLink to='/listpage' className="link-button" activeStyle={{
    fontWeight: "bold",
    background: "dodgerblue",
    color: "white"
  }}> List </NavLink>
                <NavLink to='/addpage' className="link-button" activeStyle={{
    fontWeight: "bold",
    background: "dodgerblue",
    color: "white"
  }}> Add </NavLink>
        </nav>


    );
  }