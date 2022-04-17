import React, { useState } from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";
var obj = {};
function Radio(props) {
  var arr = [1, 2, 3, 4];
  var visible = true;
  // localStorage.removeItem(`mcq1`)
  var dataCheck = JSON.parse(localStorage.getItem(`mcq${props.index}`));
  // console.log(dataCheck ? Object.keys(dataCheck).length : "null");
  var flag = dataCheck ? Object.keys(dataCheck).length : false;
  var question = "";
  var k = ["", "", "", ""];
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
    const [tripType, setTripType] = useState(flag ? dataCheck.answer : "1");
    return (
      <>
        <div style={{ display: "flex", margin: "3px" }}>
          <div
            className="radio-btn"
            onClick={() => {
              setTripType("1");
              ans = "1";
            }}
          >
            1.
            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === "1"}
            />
          </div>{" "}
          &nbsp;&nbsp;&nbsp;
          <div
            className="radio-btn"
            onClick={() => {
              setTripType("2");
              ans = "2";
            }}
          >
            2.
            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === "2"}
            />
          </div>{" "}
          &nbsp;&nbsp;&nbsp;
          <div
            className="radio-btn"
            onClick={() => {
              setTripType("3");
              ans = "3";
            }}
          >
            3.
            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === "3"}
            />
          </div>{" "}
          &nbsp;&nbsp;&nbsp;
          <div
            className="radio-btn"
            onClick={() => {
              setTripType("4");
              ans = "4";
            }}
          >
            4.
            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === "4"}
            />
          </div>
        </div>
      </>
    );
  };
  const Search = () => {
    const [tagList, settagList] = useState(flag ? dataCheck.suggestion : []);

    const [currentTag, setcurrentTag] = useState("");
    return (
      <div className="radio-btn-container">
        <SearchIcon htmlColor="blue" />

        <input
          type="text"
          placeholder="Search Topic here"
          onChange={(e) => setcurrentTag(e.target.value)}
          // onBlur={() => setvisible(false)}
          // onClick={() => setvisible(true)}
          value={currentTag}
        />
        <div
          style={{
            height: "auto",
            width: "140px",
            overflow: "scroll",
            marginLeft: "100px",
          }}
        >
          {Data.filter((post) => {
            if (currentTag === "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(currentTag.toLowerCase())
            ) {
              return post;
            }
          }).map((post, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  setcurrentTag("");
                  settagList([...new Set([...tagList, post.title])]);
                  suggestion = [...new Set([...tagList, post.title])];
                }}
              >
                <p>{post.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: "silver", width: "cover" }}>
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
  var Data = [
    { id: 1, title: "abcccc", author: "a1" },
    { id: 2, title: "acccccb", author: "b1" },
    { id: 3, title: "c", author: "c1" },
    { id: 4, title: "d", author: "d1" },
  ];
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
          style={{ margin: "2px" }}
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
      <button onClick={finalQuestion} disabled={!visible}>
        finalQuestion
      </button>
    </div>
  );
}
export default Radio;
export { obj };
