import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileFooter from './ProfileFooter'

function ProfileLayout() {
  return (
    <div><Outlet/>
    <ProfileFooter/>
    </div>

  )
}

export default ProfileLayout