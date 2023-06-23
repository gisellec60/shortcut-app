import React from 'react'
import {useParams} from "react-router-dom"

function ShowTask({taskData}) {

  console.log(taskData)
  return (
     <div className="inner-container">
       <p>{taskData.task} : {taskData.keys} </p>
       <button></button>
    </div>
  )
}

export default ShowTask
