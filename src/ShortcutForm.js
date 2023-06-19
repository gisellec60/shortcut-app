import React,{useState} from "react"
import useDropDown from "./DropDown"

function ShortcutForm ({isAdd}) {
    const [category, setCategory] = useState("")
    const [formData, setFormData] = useState({task:"",keys:""})

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/${category.toLowerCase()}`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(
               { 
                 "task":formData.task,

                 "keys":formData.keys
               }
            )    
        })
        .then(res => res.json())
        .then((newData)=> console.log(newData))
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
            <select className="menu-trigger" value={category} onChange={(e) =>setCategory(e.target.value)} > 
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