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
    
    return {shortcuts, isLoaded}
}
export default useLoadData