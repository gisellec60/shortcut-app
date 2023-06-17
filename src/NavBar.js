import React from 'react'
import {Route, NavLink} from "react-router-dom"

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "red",
    textDecoration: "none",
    color:"white"
  }  

  return (
    <div>
      <NavLink exact to="/" style = {linkStyles} activeStyle={{bacgroun:"dark blue"}} >
        Home
      </NavLink>
      <NavLink exact to="/general" style = {linkStyles} activeStyle={{bacgroun:"dark blue"}} >
        General
      </NavLink> 
      <NavLink exact to="/basic-editing" style = {linkStyles} activeStyle={{bacgroun:"dark blue"}} >
        BasicEditing
      </NavLink>  
      <NavLink exact to="/search-replace" style = {linkStyles}  activeStyle={{bacgroun:"dark blue"}} >
        SearchReplace
      </NavLink> 
      <NavLink exact to="/multicursor" style = {linkStyles}  activeStyle={{bacgroun:"dark blue"}} >
        MultiCursor
      </NavLink> 
      <NavLink exact to="/add" style = {linkStyles} activeStyle={{bacgroun:"dark blue"}} >
        Add
      </NavLink>    
      <NavLink exact to="/modify"style = {linkStyles} activeStyle={{bacgroun:"dark blue"}} >
        Modify
      </NavLink> 
      <NavLink exact to="/delete" style = {linkStyles} activeStyle={{bacgroun:"dark blue"}} >
        Delete
      </NavLink>    
    </div>
  )
}

export default NavBar
