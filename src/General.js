import React from 'react'
import useLoadData from "./useLoadData"

function General () {
        
    const {shortcuts,isLoaded} = useLoadData("http://localhost:3001/general")

     console.log("this is shortcut", shortcuts)

    if(!isLoaded) {
      return <h2>Data Loading...</h2>
    }

    const displayInfo = shortcuts.map((shortcut) => 
       <li key={shortcut.id}>{shortcut.phrase} : {shortcut.command}</li>
    )

    return (
      <div >                                 
        <h2>General</h2>
        <ul>
          {displayInfo}
        </ul>  
      </div>
    )
  }


export default General


