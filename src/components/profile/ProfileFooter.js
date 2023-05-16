import React from 'react'
import { Link } from 'react-router-dom'
function ProfileFooter() {
  return (
    <div>
        <Link to={"/profile"}>Go Back To Profile</Link>
    </div>
  )
}

export default ProfileFooter