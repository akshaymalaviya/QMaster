import React from 'react'
import CreateQuiz from '../CreateQuiz'

export default function CreateQuizHome() {
    const Add =()=>{
        console.log("hi");
        return(<h1>hi</h1>)
    }
  return (
    <div>
    <CreateQuiz/>
        <button onClick={Add} >Add question</button>
    </div>
  )
}
