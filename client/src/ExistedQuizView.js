import React,{useState} from 'react'
import { useLocation } from "react-router-dom";

export default function ExistedQuizView() {
    const location = useLocation();
console.log(location);
    const [first, setfirst] = useState(location.state)
  return (
      <>
    {first?
        first.map((e,i)=>{
            return(
                <>
                    <li>{e.question}</li>
                    <li>{e.option.map((e,i)=>{
                        return(
                            <>
                                <h3>{e}</h3>
                            </>
                        )
                    })}</li>
                    <li>{e.suggestion.map((e,i)=>{
                        return(
                            <>
                                <h3>{e}</h3>
                            </>
                        )
                    })}</li>
                    <li>{e.answer}</li>
                </>
            )
        })
    :null}
    </>
  )
}
