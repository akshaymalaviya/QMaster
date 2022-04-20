import React,{useState,useEffect} from 'react'
import { useLocation ,useNavigate} from "react-router-dom";

export default function ReportListData() {
    const location = useLocation();
    const [first, setfirst] = useState(location.state.quizData)
    const [list, setlist] = useState([])
    const callStudentData=async()=>{
        try {
            const response = await fetch("/api/auth/studentlist", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              credentials: "include",
            });
      
            const data = await response.json();
            const tempdata=data.filter((e,i)=>(e.quizID===location.state.quizID));
            setlist(tempdata.length===0?[]:tempdata[0].list);
            if (!response.status === 200) {
              const error = new Error(response.error);
              throw error;
            }
          } catch (error) {
            console.log(error);
          }
    }
useEffect(() => {
callStudentData()
}, [])
const filterizeData=()=>{
// list.filter((e,i)=>(e.quizID===location.state.quizID))
}
  return (
      <>
      {console.log(list)}
      {console.log(first)}
      {list?.length?
      <>
    <div>Attanded student number : {list?.length}</div></>
    :
    <h2>NO student hase attanded quiz</h2>}
    </>
  )
}
