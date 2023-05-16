import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import Welcom from "./Welcom"


function Start() {
   
    const content= (
      <main className="column">
  <h1>Product manager service</h1>
 <Welcom/>
   <LoginButton/>

    </main>
    )
    return content
}

export default Start