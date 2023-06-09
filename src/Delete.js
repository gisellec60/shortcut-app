import React, {useState,useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {useHistory} from "react-router-dom"

function Delete() {
  const [shortcuts, setShortcuts] = useState([])
  const [showContainer, setShowContainer] = useState(true)
  const category = useRef("")  
  const history = useHistory()
  
  const handleChange = (e) =>{
      category.current = (e.target.value)
      // fetch("https://gisellec60-json-server-template.onrender.com/shortcuts")
      fetch("http://localhost:3000/shortcuts")
        .then((res) => res.json())
        .then((shortcuts) =>  {
            const shortcutFilterArray = shortcuts.filter((shortcut)=>{
              return shortcut.category === category.current.toLowerCase()
        })
       setShortcuts(shortcutFilterArray)})
  }

  const handleDeleteClick = ((id) => {
    // fetch(`https://gisellec60-json-server-template.onrender.com/shortcuts/${id}`,{
    fetch(`http://localhost:3000/shortcuts/${id}`,{
      method:"DELETE"
    })
    .then (res => res.json())
    .then (() => handleDeleteTask(id))
  })

  const handleDeleteTask = ((id) => {
     const upDatedShortcuts = shortcuts.filter((shortcut) => shortcut.id !== id )
     setShortcuts(upDatedShortcuts)
  })
                          
  const displayInfo = shortcuts.map((shortcut) => {
    return (
      <div >
        <div className="listing" >
           <div key={shortcut.id}>{shortcut.os} - {shortcut.task}</div> 
           <button className="taskButnDel">{shortcut.keys}</button>
           <button onClick={() => handleDeleteClick(shortcut.id)} 
           className="delButn"> Delete </button>
        </div>
      </div>   
    )
  })
  
  const handleClick = (()=>
      history.push("/")
  )
 const handleShow = {display:"none"}

  return (
   <div className="container" style={!showContainer ? handleShow:null}>
       <CloseIcon id="closeModifyBtn" onClick={() => {handleClick();setShowContainer(!showContainer) }} />
       <h3 id="pick-del">Pick a Category </h3>
         <select className="menu-trigger-del" value={category.current} 
          onChange={handleChange} > 
          <option></option>
          <option>General</option>
          <option>Basic</option>
          <option>Search and Replace</option>
          <option>Multi-Cursor</option>
        </select>
        <div>
            {displayInfo}
        </div>
  </div>
  )

 }

export default Delete
