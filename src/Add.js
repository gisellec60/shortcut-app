import React, {useState} from 'react'
import ShortcutForm from "./ShortcutForm"

function Add() {
  const [isAdd, setIsAdd] = useState(true)
  
  return (
   // we are adding data 
   <ShortcutForm isAdd={isAdd} /> 
  )
}

export default Add
