import {getRandomColor} from "./randomColorGenerator.js"
import './App.css'
import React, {useState} from "react"
import Home from "./Home"
import General from "./General"
import BasicEditing from "./BasicEditing"
import SearchReplace from "./SearchReplace"
import MultiCursor from "./MultiCursor"
import Add from "./Add"
import Modify from "./Modify"
import Delete from "./Delete"
import NavBar from "./NavBar"
import { Route, Switch } from "react-router-dom"

function App() {
   return (
    <div className="App">  
      <h1 >
        <p> VS Code <span style={{fontStyle:"italic"}}>Shortcuts</span> for Windows </p>
      </h1>
      <NavBar />
      <Switch>
        <Route exact path ="/general">
          <General />
        </Route>  
        <Route exact path ="/basic-editing">
          <BasicEditing />
        </Route>   
        <Route exact path ="/search-replace">
          <SearchReplace />
        </Route>  
        <Route exact path ="/multicursor">
          <MultiCursor />
        </Route>  
        <Route exact path ="/add">
          <Add />
        </Route>  
        <Route exact path ="/modify">
          <Modify />
        </Route>  
        <Route exact path ="/delete">
          <Delete />
        </Route>  
        <Route exact path="/">
          <Home />
        </Route >
     </Switch> 
    </div>
  );
}

export default App;

// return (
//   <div className="App">  style={{backgroundColor:color}}
//     <h1 >
//       <p> VS Code <span style={{fontStyle:"italic"}}>Shortcuts</span> for Windows </p>
//     </h1>
//     <Search />
//     <Head onChangeColor={handleChangeColor}/>
//   </div>
// );
// }
