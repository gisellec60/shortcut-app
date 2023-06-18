import React, {useState} from "react"
import ShortcutForm from "./ShortcutForm"

function DropDown({isAdd}) {
  
    const [selected, setSelected] = useState("")
    
    return (
    <div>
      <h1 id="add-label">Add Shortcut</h1>
      <h3 id="pick-category">Pick a Category </h3>
      <select className="menu-trigger" value={selected} onChange={(e) =>setSelected(e.target.value)} > 
        <option>General</option>
        <option>Basic</option>
        <option>Search and Replace</option>
        <option>Multi-Cursor</option>
      </select>
      <ShortcutForm isAdd={isAdd} />
    </div>
    )

}
export default DropDown