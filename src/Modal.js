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
        fetch(`${process.env.REACT_APP_API_URL}/shortcuts/${patchId}`, {
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
                <h1>Edit Shortcut</h1>
            </div>
            <div className="body">
                <form onSubmit={handleSubmit}>
                    <label className="label-modal-task">Task
                        <input className="modal-input-task" type="text" name="task" 
                        onChange={handleChange} value={formData.task} />
                    </label>
                    <label className="label-modal-keys"> Keys
                         <input className="modal-input-keys" type="text" name="keys"
                         onChange={handleChange} value={formData.keys} />
                    </label>  
                    <label className="label-modal-desc"> Description
                         <input className="modal-input-desc" type="text" name="description"
                          onChange={handleChange} value={formData.description} />
                    </label>  
                    <label className="label-os"> 
                        <h4>Operating System</h4> 
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
