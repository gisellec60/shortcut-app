import React from 'react'
import useLoadData from "./useLoadData"

function SearchReplace () {

    const {displayInfo} = useLoadData("search")

    return (
      <div>
        <div className="inner-container" >  .
          <h2 className="h2">Search and Replace</h2>
          <div className="task-listing" >                               
              {displayInfo}
          </div>
        </div>   
    </div>
    )
  }

export default SearchReplace
