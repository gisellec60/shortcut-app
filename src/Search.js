import React,{useState,useRef} from 'react'

function Search() {
  const [searchedData, setSearchData] = useState([])
  const [shortcuts, setShortcuts] = useState([])
  const [findTask,setFindTask] =useState("")
  const categories =["general","basic","search","multi-cursor"]

    const handleSubmit = (e) => {
     e.preventDefault()
        categories.map((category) => {
          fetch(`http://localhost:3001/${category}`)
         .then((res) => res.json())
         .then((shortcuts) => setShortcuts([...shortcuts])) 
           
     }) 
    console.log("This is it", shortcuts)                    
  }
  
  return (
   <div> 
    <form onSubmit={handleSubmit} >
      <input className="boxsize" name="task" type="text" 
       onChange={(e) => setFindTask(e.target.value)} value={findTask} placeholder="Enter task..." />
      <button id="submitButn" type="submit">Enter</button>
    </form>
   </div> 
  )
} 

export default Search
