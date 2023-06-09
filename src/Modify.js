import React,{useState,useRef} from 'react'
import Modal from "./Modal"
import CloseIcon from '@mui/icons-material/Close';
import {useHistory} from "react-router-dom"
import Button from '@mui/material/Button';

function Modify() {
  const [shortcuts, setShortcuts] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [showContainer, setShowContainer] = useState(true)
  const [hideContainer, setHideContainer] = useState(true)
  const [patchId, setPatchId] = useState(0)
  const [patchShortcut, setPatchShortcut] = useState("")
  const [patchKey, setPatchKey] = useState("")
  const [patchDesc, setPatchDesc] = useState("")
  const [patchOs, setPatchOs] = useState("")
  const category = useRef("")  
  const history = useHistory()
  
  const handleChange = (e) =>{
    category.current = e.target.value
    // fetch("https://gisellec60-json-server-template.onrender.com/shortcuts")
    fetch("http://localhost:3000/shortcuts")
    .then((res) => res.json())
    .then((shortcuts) =>  {
      const shortcutFilterArray = shortcuts.filter((shortcut)=>{
          return shortcut.category === category.current.toLowerCase()
  })
  setShortcuts(shortcutFilterArray)})
  }

  function patchUpdate (obj) {
    const updatedArray = shortcuts.map((shortcut) => {
        if(shortcut.id === obj.id) {
          return obj
        }else{
          return shortcut
        }
    })
    setShortcuts(updatedArray)
  }
  
  const displayInfo = shortcuts.map((shortcut) => {
    return (
      <div> 
        <div className="listing" >
          <div key={shortcut.id}>{shortcut.os} - {shortcut.task}:</div> 
          <button className="taskButn">{shortcut.keys}</button>
           <button onClick={() => { 
             setOpenModal(true); setPatchKey(shortcut.keys); setPatchId(shortcut.id) ;
               setPatchShortcut(shortcut.task); setPatchDesc(shortcut.description);
               setPatchOs(shortcut.os)}} className ='editButn'>Edit</button> 
         </div>
      </div>   
    )
  })

  const handleClick = (()=>
      history.push("/")
  )

  const handleShow = {display:"none"}
  const handleVisible = {visibility:"hidden"}

  return (
   <div> 
    <div className="container" style={!showContainer ? handleShow:null} >
         <CloseIcon id="closeModifyBtn" onClick={() => {handleClick();setShowContainer(!showContainer) }} />  
         <h3 id="pick-del">Pick a Category </h3>
         <select className="menu-trigger-edit" value={category.current} 
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
           {openModal && <Modal closeModal={setOpenModal}
              patchId={patchId} patchShortcut={patchShortcut} category={category.current} 
              patchKey={patchKey} patchOs={patchOs} patchDesc={patchDesc} 
              patchUpdate={patchUpdate} />}
      </div>      
   
  )
 }

export default Modify                                  
