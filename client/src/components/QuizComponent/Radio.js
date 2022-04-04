import React, { useState } from "react";
export default function Radio() {
  const [tripType, setTripType] = useState(0);
  const [arr, setarr] = useState([1, 2, 3, 4]);
  const [arr1, setarr1] = useState(["", "", "", ""]);
  const [first, setfirst] = useState();
var k=['','','',''];
  const OneRadioButton = (props) => {

    const change = (e) => {
    k[props.val]=e.target.value;
    };
    return (
      <>
        <div
          className="radio-btn"
          onClick={() => {
            // setarr1([...arr1, (arr1[props.val] = k)]);
            setTripType(props.val);
            // console.log(arr1);

          }}
        >
          <input
            type="radio"
            value={tripType}
            name="tripType"
            defaultChecked={tripType === props.val}
          />
          
        </div>
        <input
            type="text"
            onChange={change}
            placeholder={`option ${props.val}`}
          />
         
      </>
    );
  };
  const remove = () => {
    setarr1(k);
    setarr(arr.filter((e) => e !== arr.length));
    let temp = arr1;
    temp.pop();
    setarr1(temp);

  };
  const add = () => {

    setarr([...arr, arr.length + 1]);
    setarr1([...arr1, ""]);
    
  };
  return (
    <div className="App">
      <div className="radio-btn-container">
        {arr.map((e, i) => {
          return (
            <div key={i}>
              <OneRadioButton val={i} />
            </div>
            
          );
        })}
        <button onClick={add}>+</button>
        <button onClick={remove}>-</button>
      </div>
    </div>
  );
}
