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
   <div className="container ">
     <div className="search-listing">
       <div>{taskData.os}</div>
       <p>Task : {taskData.task}</p>
       <p>Key Sequence : {taskData.keys}</p>
       <p>Description - {taskData.description}</p>
       <CloseIcon id="closeShowBtn" onClick={handleClick}/> 
    </div>
    </div>
  )
}

export default ShowTask
