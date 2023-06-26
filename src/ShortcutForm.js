import React,{useState,useRef} from "react"
import {useHistory} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';

function ShortcutForm ( {setOpenForm}) {
    const [formData, setFormData] = useState({task:"",keys:"",category:"",description:""})
    const [showContainer, setShowContainer] = useState(true)
    const [wChecked, setWChecked] = useState(false) 
    const [mChecked, setMChecked] = useState(false)
    const history = useHistory()
    const keys = useRef("")  
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const key = keys.current
        fetch("http://localhost:3001/shortcuts",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(
               { 
                "task":formData.task,
                [key]:formData.keys,
                "description":formData.description,
                "category":formData.category.toLowerCase()
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

    const handleWindows = () => {
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
            <label id="label-desc"> Description
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
               {/* <button id="win" onClick>Windows</button>
               <button id="mac" onClick>MacOs</button> */}
               <label id="label-win">
                    Windows
                    <input type="checkbox" id="win" name="windows" 
                        checked={wChecked} onChange={()=>{handleWindows();keys.current="mkeys"}} />
               </label>
               <label id="label-mac">
                    MacOs
                        <input type="checkbox" id="mac" name="mac" 
                        checked={mChecked} onChange={()=>{handleMac();keys.current="mkeys"}}/>
               </label>
               <button className="butn" id="addButn" type="submit">Submit</button>
        </form>
      </section>  
    )
}
export default ShortcutForm
