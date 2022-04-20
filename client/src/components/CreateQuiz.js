import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Checkbox from './QuizComponent/Checkbox';
import Radio from './QuizComponent/Radio';
import Textarea from './QuizComponent/Textarea';
import TF from './QuizComponent/TF';
export default function CreateQuiz() {
  const [type, settype] = useState(null);
  const SelectedType = () => {
    switch (type) {
      case 'radio':
        return <Radio />;
      case 'checkbox':
        return <Checkbox />;
      case 'TF':
        return <TF />;
      case 'textarea':
        return (
          <>
            <Textarea />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <Dropdown>
        <input className="addQuestion" type="text" placeholder="Question" />
        <br />

        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{ margin: '10px', backgroundColor: '#626567' }}
        >
          Option type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              settype('radio');
            }}
          >
            Single Choice
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              settype('checkbox');
            }}
          >
            Multiple Choice
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              settype('TF');
            }}
          >
            True/False
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              settype('textarea');
            }}
          >
            Textarea
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {type ? <SelectedType /> : null}
      <hr />
    </>
  );
}
