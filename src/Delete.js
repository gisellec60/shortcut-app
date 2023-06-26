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
      if(category.current === "Search and Replace")
         category.current = "search"
      
      fetch("http://localhost:3001/shortcuts")
        .then((res) => res.json())
        .then((shortcuts) =>  {
            const shortcutFilterArray = shortcuts.filter((shortcut)=>{
              return shortcut.category === category.current.toLowerCase()
        })
       setShortcuts(shortcutFilterArray)})
  }

  const handleDeleteClick = ((id) => {
    fetch(`http://localhost:3001/shortcuts/${id}`,{
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
           <div key={shortcut.id}>{shortcut.os} - {shortcut.task} {shortcut.keys}</div> 
           <button onClick={() => handleDeleteClick(shortcut.id)} 
           className="editButn"> Delete </button>
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
       <option>MultiCursor</option>
     </select>
     <div>
         {displayInfo}
     </div>
  </div>
  )

 }

export default Delete
// useEffect (() => {
//   fetch("http://localhost:3001/shortcuts")
//     .then((res) => res.json())
//     .then((shortcuts) => {
//         const shortcutFilterArray = shortcuts.filter((shortcut)=>{
//         return shortcut.category === category
//       })
//       setShortcuts(shortcutFilterArray)
//   setIsLoaded(true)})
// },[category])