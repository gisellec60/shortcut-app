import React,{useState} from "react"

function ShortcutForm ({isAdd}) {
    const [selected, setSelected] = useState("")
    const [formData, setFormData] = useState({task:"",keys:""})

    const handleSubmit = () => {
         
    }

    const handleChange = ((e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    })

    return (
      <section id="container">
        <h1>{isAdd ? "Add Shortcut" : "Modify Shortcut"}</h1>
        <form onSubmit={handleSubmit}>
            <label className="label">Task
              <input className="inputsize" type="text" name="task" 
                onChange ={handleChange}  value={formData.task}/>
            </label>
            <label className="label"> Keys
            <input className="inputsize" type="text" name="keys"
               onChange ={handleChange} value={formData.keys} />
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