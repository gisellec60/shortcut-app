import React from 'react'
import  "./Search.css"
import CloseIcon from '@mui/icons-material/Close';

function ShowTask({taskData, setShowTask}) {
  
  const handleClick = () => {
      console.log("close")
      setShowTask(false)
  }

  console.log(taskData)
  return (
   <div className="inner-container ">
       <p>task: {taskData.task}</p>
       <p>Key Sequence:{taskData.keys}</p>
       <CloseIcon id="clearShowBtn" onClick={handleClick}/> 
    </div>
  )
}

export default ShowTask
