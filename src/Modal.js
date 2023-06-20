import React, {useState} from 'react'

function Modal({closeModal}) {

    const [formData, setFormData] = useState({task:"",keys:""})

    const handleSubmit = (() => {

    })

    const handleChange = (() => {

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
            <label className="label">Task
              <input className="inputsize" type="text" name="task" 
                onChange ={handleChange}  value={formData.task}/>
            </label>
            <label className="label"> Keys
            <input className="inputsize" type="text" name="keys"
               onChange ={handleChange} value={formData.keys} />
            </label>  
            <button className="butn" type="submit">Submit</button>
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