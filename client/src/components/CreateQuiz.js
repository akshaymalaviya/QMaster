import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Checkbox from "./QuizComponent/Checkbox";
import Radio from "./QuizComponent/Radio";
import Textarea from "./QuizComponent/Textarea";
import TF from "./QuizComponent/TF";
export default function CreateQuiz(props) {
  const [type, settype] = useState(null);
  const SelectedType = () => {
    switch (type) {
      case "radio":
        return (<Radio index={props.index}/>);
      case "checkbox":
        return (<Checkbox/>);
      case "TF":
        return (<TF/>);
      case "textarea":
        return <>
            <Textarea/>
        </>;
      default:
        return null;
    }
  };
  return (
    <>
      <Dropdown>

        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{marginBottom:'1px'}}>
          Option type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              settype("radio");
            }}
          >
            Single Choice
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              settype("checkbox");
            }}
          >
            Multiple Choice
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              settype("TF");
            }}
          >
            True/False
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              settype("textarea");
            }}
          >
            Textarea
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {type ? <SelectedType /> : null}
      <hr/>
      
    </>
  );
}
