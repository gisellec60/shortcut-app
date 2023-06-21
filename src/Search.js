import React,{useState,useRef} from 'react'

function Search({shortcuts}) {
  const [searchedData, setSearchData] = useState([])
  // const [shortcuts, setShortcuts] = useState([])
  const [findTask,setFindTask] =useState("")
  const categories =["general","basic","search","multi-cursor"]
  console.log("what is shortcuts", typeof shortcuts)
    
  return (
   <div className="search"> 
      <div className="searchInputs">
        <input className="boxsize" name="task" type="text" 
            placeholder="Enter task..." />
        <div className="searchIcon">
          {/* <SearchIcon /> */}
        </div>
       </div> 
        {/* <div className="dataResults">
            {Object.entries.shortcuts.map((shortcut) => {
              return <div> {shortcut} </div>
            })}
        </div> */}
    </div> 
  )
} 

export default Search
