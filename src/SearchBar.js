import React,{useState,useRef,useEffect} from 'react'
import  "./Search.css"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom"
import ShowTask from "./ShowTask"

function SearchBar() {
 
  const [filteredData, setFilteredData] =useState([])
  const [shortcuts, setShortcuts] = useState([])
  const [taskEntered, setTaskEntered] = useState("")
  const [taskData, setTaskData] = useState([])
  const [showTask, setShowTask]= useState(false)
   
  
  useEffect (() => {
    fetch("http://localhost:3001/shortcuts")
          .then((res) => res.json())
          .then((shortcuts) => { 
             setShortcuts(shortcuts)
        })
    },[])
  
  const handleFilter= ((e) => {
     const searchTask = e.target.value
     setTaskEntered(searchTask)
     const newFilter = shortcuts.filter((shortcut) => {
        return shortcut.task.toLowerCase().includes(searchTask.toLowerCase())
     }) 
     if(searchTask === ""){
       setFilteredData([])
     }else {
       setFilteredData(newFilter)
     }
  })
                             
  const clearInput = () => {
    setFilteredData([])
    setTaskEntered("")
  }

  return (
    <div className="search"> 
      <div className="searchInputs">
        <input onChange={handleFilter} value={taskEntered} type="text" placeholder="Enter a task..." />
        <div className="searchIcon">
        {filteredData.length === 0 ? <SearchIcon/> :
            <CloseIcon id="clearBtn" onClick={clearInput} />} 
        </div>
      </div> 
       {filteredData.length != 0 && (
        <div className="dataResult" >
            {filteredData.map((data) => {
              return(
                <a key={data.id} className="dataItem">
                  <p onClick={() => {setTaskData(data); setShowTask(true)}} >
                    <Link to={`/${data.id}`}>{data.task}</Link>
                  </p> 
                </a>
              ) 
            })}         
        </div>
       )} 
      {showTask && <ShowTask taskData={taskData} /> }   
    </div> 
  )
} 

export default SearchBar