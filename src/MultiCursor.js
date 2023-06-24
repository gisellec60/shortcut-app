import React,{useState} from 'react'
import useLoadData from "./useLoadData"
import CloseIcon from '@mui/icons-material/Close'
import {useHistory} from "react-router-dom"

function MultiCursor() {
  
   const {displayInfo} = useLoadData("multicursor")
   const [showContainer, setShowContainer] = useState(true)
   const history = useHistory()

   const handleClick = (()=>
   history.push("/")       
   )
   
   const handleShow = {display:"none"}

  return (
    <div>
      <div className="inner-container" style={!showContainer ? handleShow:null}>
            <CloseIcon id="closeAddBtn" 
            onClick={() => {handleClick();setShowContainer(!showContainer) }} />  
        <h2 className="h2">Multi-Cursor</h2>
        <div className="task-listing" >                               
            {displayInfo}
        </div>
      </div>   
  </div>
  )
}

export default MultiCursor
