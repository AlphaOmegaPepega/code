import React from 'react'
import { companySize } from '../../config/companySize'
import {Roles} from "../../config/roles"
import { Link } from 'react-router-dom'
function EditProfile() {
    
    const options = Object.values(companySize).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })
    const options2 = Object.values(Roles).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })
    const handleSave=async(e)=>{
        e.preventDefault()

    }


  const content= (    
    <form onSubmit={handleSave}>
   <label>Full name <input
    className="form__input"
    type="text"
   
   
   
   /></label>
    <label className="form__label" htmlFor="size">Company size 
    <select
   id='size'
   name='size'
    type="text"
   size="3"
   className={`form__select`}
   
   >
    {options}
    </select>
   </label>
   <label className="form__label" htmlFor="roles">Role 
   <select
   id='roles'
   name='roles'
    type="text"
   size="2"
   className={`form__select`}
   
   >
    {options2}
    </select></label>
   <button>Submit</button>
    </form>
  )
  return content
}

export default EditProfile