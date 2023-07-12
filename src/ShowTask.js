import React from 'react'
import  "./Search.css"
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

function ShowTask({taskData, setShowTask}) {
  
  const handleClick = () => {
      console.log("close")
      setShowTask(false)
  }

  console.log(taskData)
  return (
   <div className="search-container ">
     <div id="search-listing">
       <div>{taskData.os}</div>
       <p>Task : {taskData.task}</p>
       <p>Key Sequence </p>
       <Button variant='contained'>{taskData.keys}</Button>
       <p>Description - {taskData.description}</p>
       <CloseIcon id="clearShowBtn" onClick={handleClick}/> 
    </div>
    </div>
  )
}

export default ShowTask
