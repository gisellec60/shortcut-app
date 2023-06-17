import React from 'react'
import useLoadData from "./useLoadData"

function SearchReplace () {

    const {displayInfo} = useLoadData("http://localhost:3001/search")

    return (
      <div className = "box" id="search">
        <h2>Search and Replace</h2>
        {displayInfo}
      </div>
      
    )
  }

export default SearchReplace
