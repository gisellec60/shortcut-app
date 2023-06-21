import React, {useState} from 'react'

function Modal({closeModal, id, category }) {

    const [formData, setFormData] = useState({task:"",keys:""})

    const handleSubmit = (() => {
      console.log(formData.task, formData.keys)
    })
    const handleChange = ((e) => {
        console.log(e.target.value)
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
              <input className="inputsize" type="text" name="task" 
                onChange={handleChange} value={formData.task}/>
            </label>
            <label className="label-modal"> Keys
            <input className="inputsize" type="text" name="keys"
               onChange={handleChange} value={formData.keys} />
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