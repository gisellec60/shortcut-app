import React,{useState} from "react"
import {useHistory} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';

function ShortcutForm ( {setOpenForm}) {
    const [formData, setFormData] = useState({task:"",
    keys:"",
    category:"",
    description:"",
    os:""})

    const [showContainer, setShowContainer] = useState(true)
    const [wChecked, setWChecked] = useState(false) 
    const [mChecked, setMChecked] = useState(false)
    const history = useHistory()
       
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
                "description":formData.description,
                "category":formData.category.toLowerCase(),
                "os":formData.os
               }
            )    
        })
        .then(res => res.json())
        .then((newData) => console.log(newData))
        alert("update succesful")
        setOpenForm(false)
        history.push("/")
    }
    
    const handleChange = ((e) => {
         setFormData({
            ...formData,
            [e.target.name]: e.target.value                     
        });
    })
    
    const handleClick = (()=>
    history.push("/")
)
    const handleShow = {display:"none"}

    const handleWindows = (e) => {
        
        
         setWChecked(!wChecked)
         setMChecked(false)
    }
    const handleMac = () => {
        setMChecked(!mChecked)
        setWChecked(false)
     }
    
    return (
      <section className = "inner-container" style={!showContainer ? handleShow:null}>
      <CloseIcon id="closeAddBtn" onClick={() => {handleClick();setShowContainer(!showContainer) }} />
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
            <label id="label-desc-add"> Description
            <input className="add-desc" type="text" name="description"
               onChange={handleChange} value={formData.description} />
            </label>  
            <h3 id="pick-category">Pick a Category </h3>
            <select className="menu-trigger" name="category" value={formData.category} onChange={handleChange} > 
                <option></option>
                <option>General</option>
                <option>Basic</option>
                <option>Search and Replace</option>
                <option>MultiCursor</option>
                <option>Navigation</option>
            </select>
                                         <label id="label-win">
                    Windows
                    <input type="checkbox" id="win" name="os" 
                        checked={wChecked} onChange={()=>{handleWindows();setFormData({...formData,os:"Windows"})}} />
               </label>
               <label id="label-mac">
                    MacOs
                        <input type="checkbox" id="mac" name="os" 
                        checked={mChecked} onChange={(e)=>{handleMac(e);e.target.value="MacOS"}}/>
               </label>
               <button className="butn" id="addButn" type="submit">Submit</button>
        </form>
      </section>  
    )
}
export default ShortcutForm
