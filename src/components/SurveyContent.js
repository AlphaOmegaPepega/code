import React from 'react'
import { colaboration } from '../config/questions/questions'
function SurveyContent() {
    
  return (
   
   <main className='survey'>
  
    {colaboration.map(question=>{ return <label class="container">{question}
  <input 
  type="checkbox" 
  />
  <span class="checkmark"></span>
</label>
    })}
   
   </main>
   
  )
  
}

export default SurveyContent