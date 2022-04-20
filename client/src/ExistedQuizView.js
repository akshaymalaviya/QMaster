import React,{useState} from 'react'
import { useLocation ,useNavigate} from "react-router-dom";

export default function ExistedQuizView() {
    let navigate=useNavigate();

    const location = useLocation();
console.log(location);
    const [first, setfirst] = useState(location.state.quizData)
  return (
      <>
      <button onClick={()=>navigate('reportlistdata',{state:location.state})}>View Report</button>
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
