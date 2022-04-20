import React, { useState, useEffect } from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
var obj = {};
function Radio(props) {
  const [first, setfirst] = useState([]);
  var arr = [1, 2, 3, 4];
  var Data = [];
  var visible = true;
  // localStorage.removeItem(`mcq1`)
  var dataCheck = JSON.parse(localStorage.getItem(`mcq${props.index}`));
  // console.log(dataCheck ? Object.keys(dataCheck).length : "null");
  var flag = dataCheck ? Object.keys(dataCheck).length : false;
  var question = '';
  var k = ['', '', '', ''];
  var ans = 0;
  var suggestion = [];
  const OneRadioButton = (props) => {
    const change = (e) => {
      k[props.val] = e.target.value;
    };
    return (
      <>
        <div className="radio-btn">
          <RadioButtonUncheckedIcon />
          <input
            className="radioInput"
            type="text"
            onChange={change}
            placeholder={`option ${props.val}`}
            defaultValue={flag ? dataCheck.option[props.val] : null}
            required
          />
        </div>
      </>
    );
  };
  const Answers = () => {
    const [tripType, setTripType] = useState(flag ? dataCheck.answer : '1');
    return (
      <>
        <div
          className="mx-auto my-3"
          style={{ display: 'inline-flex', margin: '3px' }}
        >
          Answer:
          <div
            className="radio-btn ms-2"
            onClick={() => {
              setTripType('1');
              ans = '1';
            }}
          >
            1.
            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === '1'}
            />
          </div>{' '}
          &nbsp;&nbsp;&nbsp;
          <div
            className="radio-btn"
            onClick={() => {
              setTripType('2');
              ans = '2';
            }}
          >
            2.
            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === '2'}
            />
          </div>{' '}
          &nbsp;&nbsp;&nbsp;
          <div
            className="radio-btn"
            onClick={() => {
              setTripType('3');
              ans = '3';
            }}
          >
            3.
            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === '3'}
            />
          </div>{' '}
          &nbsp;&nbsp;&nbsp;
          <div
            className="radio-btn"
            onClick={() => {
              setTripType('4');
              ans = '4';
            }}
          >
            4.
            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === '4'}
            />
          </div>
        </div>
      </>
    );
  };
  const getSuggestion = async () => {
    try {
      const response = await fetch('/api/auth/createQuiz', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json();
      setfirst(data[0].database);
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const Search = () => {
    const [tagList, settagList] = useState(flag ? dataCheck.suggestion : []);

    const [currentTag, setcurrentTag] = useState('');
    return (
      <div className="radio-btn-container">
        <SearchIcon htmlColor="blue" />

        <input
          className="topicName"
          type="text"
          placeholder="Search Topic here"
          onChange={(e) => setcurrentTag(e.target.value)}
          // onBlur={() => setvisible(false)}
          // onClick={() => setvisible(true)}
          value={currentTag}
        />
        <div
          className="mx-auto"
          style={{
            height: '200px',
            width: '140px',
            overflow: 'scroll',
          }}
        >
          {first
            .filter((post) => {
              if (currentTag === '') {
                return post;
              } else if (
                post.title.toLowerCase().includes(currentTag.toLowerCase())
              ) {
                return post;
              }
            })
            .map((post, index) => (
              <div key={index}>
                <div
                  onClick={() => {
                    setcurrentTag('');
                    settagList([...new Set([...tagList, post])]);
                    suggestion = [...new Set([...tagList, post])];
                  }}
                >
                  <p>{post}</p>
                </div>
              </div>
            ))}
        </div>
        <div
          className="mx-auto my-2"
          style={{ backgroundColor: 'silver', width: '400px' }}
        >
          {tagList.map((e, i) => {
            return (
              <>
                <div>
                  {e} &nbsp;
                  {/* <span style={{backgroundColor:'silver',borderRadius:'10px'}}><CancelIcon/></span> */}
                </div>
              </>
            );
          })}
        </div>

        <Answers />
      </div>
    );
  };
  useEffect(() => {
    getSuggestion();
  }, []);

  // localStorage.removeItem('mcq');

  const finalQuestion = async () => {
    const obj = {
      id: props.index,
      question: question,
      option: k,
      suggestion: suggestion,
      answer: ans,
    };
    localStorage.setItem(`mcq${props.index}`, JSON.stringify(obj));
    // setvisible(false);
    visible = false;
  };
  return (
    <div className="App">
      <div className="radio-btn-container">
        <input
          type="text"
          placeholder="Question"
          onChange={(e) => (question = e.target.value)}
          style={{ margin: '2px' }}
          defaultValue={dataCheck ? dataCheck.question : question}
        />
        {arr.map((e, i) => {
          return (
            <div key={i}>
              <OneRadioButton val={i} />
            </div>
          );
        })}
      </div>
      <Search />
      <button
        onClick={finalQuestion}
        disabled={!visible}
        style={{
          background: '#5D6D7E',
          color: '#fff',
          borderRadius: '7px',
          border: 'none',
          margin: '2px',
          height: '30px',
          width: '120px',
        }}
      >
        final Question
      </button>
    </div>
  );
}
export default Radio;
export { obj };
