import React, {useState} from "react"

function DropDown() {
    const [category, setCategory] = useState("")
    
    const handleChange=() =>{
    }

    return (
      <div id="container">
       <h3 id="pick-del">Pick a Category </h3>
         <select className="menu-trigger-del" value={category} 
              onChange={handleChange} > 
           <option>General</option>
           <option>Basic</option>
           <option>Search and Replace</option>
           <option>Multi-Cursor</option>
         </select>
      </div>
    )
}
export default DropDown