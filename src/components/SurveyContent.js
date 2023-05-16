import React from 'react'
import { questions } from '../config/questions/questions'
import { useState,useEffect } from 'react'
import { titles,desriptions } from '../config/questions/titles'

function SurveyContent() {
  let id=0
  let scoreK=0
 const [score,setScore]=useState(0)
  const [counter,setCounter]=useState(0)
  const [surveyQ,setsurveyQ]=useState(questions[counter])
  const [title,setTitle]=useState(titles[counter])
  const [desription,setDescription]=useState(desriptions[counter])


const handleNext=()=>{
  const checkboxes=document.querySelectorAll('.chek')

  checkboxes.forEach(checkbox=>{
    if(checkbox.checked){
  scoreK++
    }
    checkbox.checked=false
    
  })
  console.log(scoreK)
setScore(score+scoreK)
  setCounter(counter+1)

    }
    useEffect(()=>{
      console.log(score)
      setTitle(titles[counter])
      setDescription(desriptions[counter])
      setsurveyQ(questions[counter])
    },[counter])

    
  return (
   
   <main className='survey'>
    <h1>{title}</h1>
    <p>{desription}</p>
  {surveyQ.map(question=>{ 
    
    return <label className="container">{question}
  <input 
  id={id}
  type="checkbox" 
  className="chek"
  />
  <span className="checkmark"></span>
</label>
    })}
  
   <button onClick={handleNext}>Next</button>
   </main>
   
  )
  
}

export default SurveyContent