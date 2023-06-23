import React from 'react'
import  "./Search.css"
import {useParams} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import { ConstructionOutlined } from '@mui/icons-material';

function ShowTask({taskData, setShowTask}) {
  
  const handleClick = () => {
      console.log("close")
      setShowTask(false)
  }

  console.log(taskData)
  return (
     <div className="inner-container ">
       <p>{taskData.task} : {taskData.keys} </p>
       <CloseIcon id="clearShowBtn" onClick={handleClick}/> 
       
    </div>
  )
}

export default ShowTask
