import React from 'react'
import  "./Search.css"
import {useParams} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';

function ShowTask({taskData}) {

  console.log(taskData)
  return (
     <div className="inner-container ">
       <p>{taskData.task} : {taskData.keys} </p>
       <CloseIcon id="clearShowBtn" /> 
       
    </div>
  )
}

export default ShowTask
