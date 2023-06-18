import React,{useState} from "react"

function ShortcutForm ({isAdd}) {
    const [selected, setSelected] = useState("")
    const [formData, setFormData] = useState({command:"",keys:""})

    const handleSubmit = () => {

    }

    return (
      <section id="container">
        <h1>{isAdd ? "Add Shortcut" : "Modify Shortcut"}</h1>
        <form onSubmit={handleSubmit}>
            <label>Command
              <input type="text" name="command" value={formData.command}/>
            </label>
            <label> Keys
            <input type="text" name="keys" value={formData.keys} />
            </label>    
            <h3 id="pick-category">Pick a Category </h3>
            <select className="menu-trigger" value={selected} onChange={(e) =>setSelected(e.target.value)} > 
                <option>General</option>
                <option>Basic</option>
                <option>Search and Replace</option>
                <option>Multi-Cursor</option>
            </select>
            <button className="butn" type="submit">Submit</button>
        </form>
      </section>  
    )
}
export default ShortcutForm