import React,{useState} from 'react'
import useLoadData from "./useLoadData"
import CloseIcon from '@mui/icons-material/Close'
import {useHistory} from "react-router-dom"

function MultiCursor() {
  
   const {displayInfo} = useLoadData("multi-cursor")
   const [showContainer, setShowContainer] = useState(true)
   const history = useHistory()

   const handleClick = (()=>
   history.push("/")       
   )
   
   const handleShow = {display:"none"}

  return (
    <>
      <div className="inner-container2" style={!showContainer ? handleShow:null}>
            <CloseIcon className="closeListBtn" 
            onClick={() => {handleClick();setShowContainer(!showContainer) }} />  
        <h2 className="h2-listing">Multi-Cursor</h2>
        <div>                               
            {displayInfo}
        </div>
      </div>   
  </>
  )
}

export default MultiCursor
