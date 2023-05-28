import logo from './logo.svg';
import './App.css';

function BasicEditing () {
  return (
    <div className = "box" id="basic">
     <p>Basic Editing</p>
    </div>
  )
}
function Add () {
  return (
    <div className = "edit" id="add">
     <p>Add</p>
    </div>
  )
}
function Modify () {
  return (
    <div className = "edit" id="mod">
     <p>Modify</p>
    </div>
  )
}
function Delete () {
  return (
    <div className = "edit" id="del">
     <p>Delete</p>
    </div>
  )
}
function MultiCursor () {
  return (
    <div className = "box" id="multi">
     <p>Multi-Cursor and Selection</p>
    </div>
  )
}
function General () {
  return (
    <div className = "box" id="gen">
     <p>General</p>
    </div>
  )
}

function SearchReplace () {
  return (
    <div className = "box" id="search">
      <p>Search and Replace</p>
    </div>
  )
}
function SearchBar () {
  return (
    <form  style = {{padding:"5px", border:"5px solid blue", display:"flex",flexdirection:"column"}}>
    <input type="text" placeholder="Enter search phrase..." />
    </form>
  )
}

function App() {
  return (
    <div className="App">
      <h1 >
        <p> VS Code <span style={{fontStyle:"italic"}}>Shortcuts</span> for Windows </p>
      </h1>
      <SearchBar />
       <div id="container">  
       <General />
       <BasicEditing />
       <SearchReplace />
       <MultiCursor />
       <Add />
       <Modify />
       <Delete />
       </div>
    </div>
  );
}


export default App;
