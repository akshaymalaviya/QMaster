import React,{useState} from 'react'

export default function AttendQuiz() {
    const [first, setfirst] = useState(null);
    const joinQuiz=(e)=>{
        e.preventDefault();
        console.log(first);
    }
  return (<>
    <div>AttendQuiz</div>
    <form onSubmit={joinQuiz}>
              <div className="mb-1">
                  <label for="name" className="form-label">
                    QUIZ CODE
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={first}
                    onChange={(e)=>setfirst(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Join the Quiz
                </button>
                </form>
                </>
  )
}
