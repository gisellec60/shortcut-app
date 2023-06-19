import React, {useState,useRef} from 'react'
import useLoadData from "./useLoadData"

function Delete() {
  // const [category, setCategory] = useState("")
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

  const displayInfo = shortcuts.map((shortcut) => {
    return (
     <> 
       <div key={shortcut.id}>{shortcut.task} : {shortcut.keys}</div>
       <button> Delete </button>
    </>  
    )
  })
  
    return (
      <div id="container">
       <h3 id="pick-del">Pick a Category </h3>
         <select className="menu-trigger-del" value={category.current} 
              onChange={handleChange} > 
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
