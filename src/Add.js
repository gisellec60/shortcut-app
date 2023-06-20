import React, {useState} from 'react'
import ShortcutForm from "./ShortcutForm"
import BasicEditing from "./BasicEditing"


function Add() {
  const [isAdd, setIsAdd] = useState(true)
  const [category, setCategory] = useState("")
  
  const handleAdd = ((category) => {
    console.log(category)
    return (
      <div>
      <BasicEditing />
      </div>
    )
  })                                   

  return (
   // Go to form to add data 
  <ShortcutForm isAdd={isAdd} onHandleAdd={handleAdd} 
     category={category} setCategory={setCategory} /> 
  )
}

export default Add
