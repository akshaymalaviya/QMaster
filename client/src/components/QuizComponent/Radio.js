import React, { useState } from "react";
export default function Radio() {
  const [tripType, setTripType] = useState(0);
  const [arr, setarr] = useState([1,2,3,4]);
  const [arr1, setarr1] = useState(['','','','']);
var a=['','','','']
  const OneRadioButton=(props)=>{
    const [first, setfirst] = useState();
    const change=(e)=>{

    setfirst(e.target.value);
      
    }
    return (
      <>
         <div
          className="radio-btn"
          onClick={() => {
            setarr1([...arr1,arr1[props.val]=first])
            setTripType(props.val);
          }}
        >
          <input
            type="radio"
            value={tripType}
            name="tripType"
            checked={tripType === props.val}
          />
          <input type='text' onChange={change} placeholder={`option ${props.val}`} value={first}/>
        </div>
      </>
    )
  }
const remove=()=>{
  setarr(arr.filter((e)=>e!==arr.length));
  let temp=arr1;
  temp.pop();
  setarr1(temp);
}
  return (
    
    <div className="App">
      <div className="radio-btn-container">
      {arr.map((e,i)=>{
        
      return (<>
      
      <OneRadioButton val={i}/>
      </>)})}
      <button onClick={()=>{setarr([...arr,arr.length+1]);setarr1([...arr1,'']);}} >+</button>
      <button onClick={remove} >-</button>
        
      </div>
    </div>
  );
}
