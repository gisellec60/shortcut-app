import {useState, useEffect} from "react"

function useLoadData(url)  {
    const [isLoaded, setIsLoaded] = useState(false)
    const [shortcuts, setShortcuts] = useState([])

    useEffect (() => {
        fetch(url)
          .then((res) => res.json())
          .then((shortcuts) => {setShortcuts(shortcuts)
        setIsLoaded(true)})
    },[url])

    if(!isLoaded) {
        return <h2>Data Loading...</h2>
      }
  
      const displayInfo = shortcuts.map((shortcut) => 
         <div key={shortcut.id}>{shortcut.task} : {shortcut.keys}</div>
      )
    return {displayInfo}
    
}
export default useLoadData