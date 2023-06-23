import './App.css'
import Home from "./Home"
import General from "./General"
import BasicEditing from "./BasicEditing"
import SearchReplace from "./SearchReplace"
import MultiCursor from "./MultiCursor"
import Add from "./Add"
import Modify from "./Modify"
import Delete from "./Delete"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import { Route, Switch } from "react-router-dom"

function App() {
   return (
    <div className="App">  
      <h1 >
        <p> Visual Studio Code <span style={{fontStyle:"italic"}}>Shortcuts</span> </p>
      </h1>
      <h2> Keyboard Shortcuts For Windows</h2>
      <NavBar />
      <SearchBar /> 
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


