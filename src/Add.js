import ShortcutForm from "./ShortcutForm"
import {useState} from "react"

function Add() {
  const [openForm, setOpenForm] = useState(true)
  
   return (
    <div>
       {openForm && <ShortcutForm setOpenForm={setOpenForm} /> }
    </div>
  )
}
export default Add
