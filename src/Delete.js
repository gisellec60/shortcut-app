import React, {useState,useRef, createFactory} from 'react'
import useLoadData from "./useLoadData"

function Delete() {
  const [shortcuts, setShortcuts] = useState([])
  const category = useRef("")  
 
  const handleChange = (e) =>{
      category.current = (e.target.value)
      if(category.current === "Search and Replace")
         category.current = "search"
       
      fetch(`http://localhost:3001/${category.current.toLowerCase()}`)
        .then((res) => res.json())
        .then((shortcuts) => setShortcuts(shortcuts))
  }

  const handleDeleteClick = ((id) => {
    fetch(`http://localhost:3001/${category.current.toLowerCase()}/${id}`,{
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
           <div key={shortcut.id}>{shortcut.task} {shortcut.keys}</div> 
           <button onClick={() => handleDeleteClick(shortcut.id)} 
           className="editButn"> Delete </button>
        </div>
      </div>   
    )
  })

  return (
   <div className="container">
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
