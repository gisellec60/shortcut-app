import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "red",
    textDecoration: "none",
    color:"white",
    top:"500px",
  }  

  return (
    <div>
      <NavLink to="/" exact style = {linkStyles} activeStyle={{background:"darkblue",}} >
        Home
      </NavLink>
      <NavLink exact to="/general" style = {linkStyles} activeStyle={{background:"darkblue",}} >
        General
      </NavLink> 
      <NavLink exact to="/basic-editing" style = {linkStyles} activeStyle={{background:"darkblue",}} >
        BasicEditing
      </NavLink>  
      <NavLink exact to="/search-replace" style = {linkStyles}  activeStyle={{background:"darkblue",}} >
        SearchReplace
      </NavLink> 
      <NavLink exact to="/multicursor" style = {linkStyles}  activeStyle={{background:"darkblue",}} >
        MultiCursor
      </NavLink> 
      <NavLink exact to="/add" style = {linkStyles} activeStyle={{background:"darkblue",}} >
        Add
      </NavLink>    
      <NavLink exact to="/modify"style = {linkStyles} activeStyle={{background:"darkblue",}} >
        Modify
      </NavLink> 
      <NavLink exact to="/delete" style = {linkStyles} activeStyle={{background:"darkblue",}} >
        Delete
      </NavLink>    
    </div>
  )
}

export default NavBar
