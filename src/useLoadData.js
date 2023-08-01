import {useState, useEffect} from "react"
import * as React from 'react';
import Button from '@mui/material/Button';

function useLoadData(category)  {
    const [isLoaded, setIsLoaded] = useState(false)
    const [shortcuts, setShortcuts] = useState([])

    useEffect (() => {
        fetch("https://gisellec60-json-server-template.onrender.com/shortcuts")
        // fetch("http://localhost:3000/shortcuts")
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

    const displayInfo =                                            
        <table id='tableSize'>
          <tbody>
           <tr >
              <th className='th-system' > System</th>
              <th  className='th-task'>Task</th>
              <th  className='th-keys'>Keys</th>
              <th  className="th-desc">Description</th>
           </tr>    
           {shortcuts.map((shortcut) => { 
             return (
                 <tr key={shortcut.id}  id='tr' >
                     <td className = "td">{shortcut.os}</td>   
                      <td className = "td">{shortcut.task}</td> 
                      <td className = "td">
                          <Button variant='contained' className="listButn">
                              {shortcut.keys}
                          </Button> 
                      </td>
                      <td className ="td td-desc">{shortcut.description}</td>
                 </tr> 
             ) 
             
          })}
         </tbody> 
      </table>
    return {displayInfo}
 }
export default useLoadData
