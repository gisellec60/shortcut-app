import React, {useState} from 'react'

function Modal({closeModal, patchId, patchShortcut, patchKey, patchUpdate,
     patchOs, patchDesc }) {

    const [formData, setFormData] = useState(
      {task:patchShortcut,
        keys:patchKey,
        description:patchDesc,
        os:patchOs})

      
        const handleSubmit = ((e) => {
        e.preventDefault()
             
        fetch(`https://gisellec60-json-server-template.onrender.com/shortcuts/${patchId}`, {
            method:"PATCH",
            headers: {"Content-Type" : "application/json"},
            body:JSON.stringify (
              formData
            )
         })
         .then(res => res.json())
         .then(obj => patchUpdate(obj))
         alert("update succesful")
         closeModal(false)
    })

    const handleChange = ((e) => {
        setFormData({ 
            ...formData,
            [e.target.name] : e.target.value 
         })
    })
   
    return (
    <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
           <button onClick={() => closeModal(false)}>X</button>
        </div>    
          <div className="title">
          <h1>Edit Task</h1>
          </div>
          <div className="body">
          <form onSubmit={handleSubmit}>
            <label className="label-modal">Task
              <input className="modal-input" type="text" name="task" 
                onChange={handleChange} value={formData.task} />
            </label>
            <label className="label-modal"> Keys
            <input className="modal-input" type="text" name="keys"
               onChange={handleChange} value={formData.keys} />
            </label>  
            <label className="label-desc"> Description
            <input id="modal-input-desc" type="text" name="description"
               onChange={handleChange} value={formData.description} />
            </label>  
            <label className="label-os"> OS
            <input id="modal-input-os" type="text" name="os"
               onChange={handleChange} value={formData.os} />
            </label>  
            <button id="modal-butn" type="submit">Submit</button>
        </form>
          </div>
          <div className="footer">
            <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
          </div>
        </div>
    </div>  
  )
}  
export default Modal ;   