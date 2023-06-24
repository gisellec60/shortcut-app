import React,{useState} from 'react'
import useLoadData from "./useLoadData"
import CloseIcon from '@mui/icons-material/Close';
import {useHistory} from "react-router-dom"

function SearchReplace () {

    const {displayInfo} = useLoadData("search")
    
    const [showContainer, setShowContainer] = useState(true)
    const history = useHistory()
    
    
    const handleClick = (()=>
    history.push("/")       
    )
    
    const handleShow = {display:"none"}
   
    return (
      <div>
        <div className="inner-container"  style={!showContainer ? handleShow:null}>
            <CloseIcon id="closeAddBtn" 
            onClick={() => {handleClick();setShowContainer(!showContainer) }} />  
          <h2 className="h2">Search and Replace</h2>
          <div className="task-listing" >                               
              {displayInfo}
          </div>
        </div>   
    </div>
    )
  }

export default SearchReplace
