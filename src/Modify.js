import React,{useState,useRef} from 'react'
import Modal from "./Modal"

function Modify() {
  const [shortcuts, setShortcuts] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const category = useRef("")  
  
  
  const handleChange = (e) =>{
    category.current = e.target.value
    if(category.current === "Search and Replace")
       category.current = "search"
     
    fetch(`http://localhost:3001/${category.current.toLowerCase()}`)
      .then((res) => res.json())
      .then((shortcuts) => setShortcuts(shortcuts))
    }
    
    const showModal =((id)=> {
       console.log(id)
       return(
        <div>
           <Modal closeModal={setOpenModal} id={id} />
        </div>  
       )
    })  

    const displayInfo = shortcuts.map((shortcut) => {
      return (
       <div >
          <div id="editListing" >
            <div key={shortcut.id}>{shortcut.task}: {shortcut.keys}</div> 
             <button onClick={() => { 
               showModal(shortcut.id); setOpenModal(true);}} id='editButn'>Edit</button> 
           </div>
      </div>   
    )
  })

  return (
    <div className="container">
      <div className="inner-container" style={{display:""}} >
         <h3 id="pick-del">Pick a Category </h3>
         <select className="menu-trigger-del" value={category.current} 
             onChange={handleChange} > 
            <option></option>   
            <option>General</option>
            <option>Basic</option>
            <option>Search and Replace</option>
            <option>Multi-Cursor</option>
          </select>
            {displayInfo}
        </div>
        {/* {openModal && <Modal closeModal={setOpenModal}  />} */}
     </div>
  )
}

export default Modify                                  
// {/* <div key={shortcut.id} id="editListing">
//         <label className="label">Task
//            <input className="inputsize" type="text" name="task" 
//                 onChange={handleChangeKeys}  value={shortcut.task}/>
//         </label>
//         {/* <button onClick={() => handleEditClick(shortcut.id)}> Edit </button> */}
//         <label className="label"> Keys
//            <input className="inputsize" type="text" name="keys"
//                onChange={handleChangeKeys} value={shortcut.keys} />
//         </label> 
//         {/* <button onClick={() => handleEditClick(shortcut.id)}> Edit </button> */}
//      </div> */}