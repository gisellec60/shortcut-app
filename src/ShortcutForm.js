import React,{useState} from "react"
import {useHistory} from "react-router-dom"

function ShortcutForm ( {setOpenForm}) {
    const [formData, setFormData] = useState({task:"",keys:"",category:""})
    const history = useHistory

    const handleSubmit = (e) => {
        
        e.preventDefault()
        fetch("http://localhost:3001/shortcuts",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(
               { 
                "task":formData.task,
                "keys":formData.keys,
                "category":formData.category.toLowerCase()
               }
            )    
        })
        .then(res => res.json())
        .then((newData) => console.log(newData))
        alert("update succesful")
        setOpenForm(false)
        // history.push("/")
    }
    
    const handleChange = ((e) => {
         setFormData({
            ...formData,
            [e.target.name]: e.target.value                     
        });
    })

    return (
      <section className = "inner-container">
        <h1 className="title">{"Add Shortcut"}</h1>
        <form onSubmit={handleSubmit} id="showForm">
            <label className="label">Task
              <input className="inputsize" type="text" name="task" 
                onChange ={handleChange}  value={formData.task}/>
            </label>
            <label className="label"> Keys
            <input className="inputsize" type="text" name="keys"
               onChange={handleChange} value={formData.keys} />
            </label>  
            <h3 id="pick-category">Pick a Category </h3>
            <select className="menu-trigger" name="category" value={formData.category} onChange={handleChange} > 
                <option></option>
                <option>General</option>
                <option>Basic</option>
                <option>Search and Replace</option>
                <option>MultiCursor</option>
            </select>
            <button className="butn" id="addButn" type="submit">Submit</button>
        </form>
      </section>  
    )
}
export default ShortcutForm