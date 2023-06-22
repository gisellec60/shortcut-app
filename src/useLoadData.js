import {useState, useEffect} from "react"

function useLoadData(category)  {
    const [isLoaded, setIsLoaded] = useState(false)
    const [shortcuts, setShortcuts] = useState([])

    useEffect (() => {
        fetch("http://localhost:3001/shortcuts")
          .then((res) => res.json())
          .then((shortcuts) => {
              const shortcutFilterArray = shortcuts.filter((shortcut)=>{
              return shortcut.category === category
            })
            setShortcuts(shortcutFilterArray)
        setIsLoaded(true)})
    },[category])

    if(!isLoaded) {
        return <h2>Data Loading...</h2>
      }
  
      const displayInfo = shortcuts.map((shortcut) => 
         <div key={shortcut.id}>{shortcut.task} : {shortcut.keys}</div>
      )
    return {displayInfo}
 }
export default useLoadData