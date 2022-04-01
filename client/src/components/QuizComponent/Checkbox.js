import React,{useState} from "react";
export default function Checkbox (){
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
  
    const handleChangeOne = () => {
      setCheckedOne(!checkedOne);
    };
  
    const handleChangeTwo = () => {
      setCheckedTwo(!checkedTwo);
    };
    const Checkbox = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
          </label>
        );
      };
    return (
      <div>
        <Checkbox
          label="Value 1"
          value={checkedOne}
          onChange={handleChangeOne}
        />
        <Checkbox
          label="Value 2"
          value={checkedTwo}
          onChange={handleChangeTwo}
        />
      </div>
    );
  };
