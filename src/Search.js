import React,{useState,useRef} from 'react'
import shortcuts from "./db.json"
import  "./Search.css"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Search() {
 
  const [filteredData, setFilteredData] =useState([])
  const [taskEntered, setTaskEntered] = useState("")
  const searchedData = useRef([])   

//  Object.values(shortcuts).map((x) => {
//         x.map((y) => {
//         searchedData.current.push(y.task)
//         })  
//   }) 

//   const handleFilter= ((e) => {
//     const searchTask = e.target.value
//     setTaskEntered(searchTask)
//     const newFilter = searchedData.current.filter((task) => {
//        return task.toLowerCase().includes(searchTask.toLowerCase())
//     }) 
//     if (searchTask === ""){
//       setFilteredData([])
//     }else {
//     setFilteredData(newFilter)
//     }
//   }) 

//   const clearInput = () => {
//     setFilteredData([])
    
//     setTaskEntered("")
//   }
  return (

   <div className="search"> 
      <div className="searchInputs">
        <input name="task" type="text" 
             value={taskEntered} placeholder="Enter a task..." />
        <div className="searchIcon">
          {filteredData.length === 0 ? <SearchIcon/> :
            <CloseIcon id="clearBtn" />} 
        </div>
      </div> 
       {filteredData.length != 0 && (
         <div className="dataResult" >
            {searchedData.current.map((data) => {
              return(
                <a className="dataItem">
                  <p>{data}</p> 
                </a>
              ) 
            })}         
        </div>
    )}    
    </div> 
  )
} 

export default Search
// onChange={handleFilter}
// onClick={clearInput}

// {filteredData.length != 0 && (
//          <div className="dataResults" >
//             {filteredData.map((data) => {
//               return(
//                 <a className="dataItem">
//                   <p>{data}</p> 
//                 </a>
//               ) 
//             })}         
//         </div>
//     )}    