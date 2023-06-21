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
   
  const modalShow = (id) => {
    if(openModal) 
      return <Modal closeModal={setOpenModal} id={id} category={category.current} />
    }  
 
  const displayInfo = shortcuts.map((shortcut) => {
    return (
      <div >
        <div className="listing" >
          <div key={shortcut.id}>{shortcut.task}: {shortcut.keys}</div> 
           <button onClick={() => { 
             modalShow(shortcut.id); setOpenModal(true);}} className ='editButn'>Edit</button> 
         </div>
      </div>   
    )
  })

  return (
    <div className="container">
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
           {modalShow}
          {openModal && <Modal closeModal={setOpenModal}  />}
   </div>
  )
 }

export default Modify                                  
