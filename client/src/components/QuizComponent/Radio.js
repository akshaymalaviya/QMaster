import React, { useState } from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import SearchIcon from "@material-ui/icons/Search";
export default function Radio() {
  var arr = [1, 2, 3, 4];
  const [tagList, settagList] = useState([]);
  const [visible, setvisible] = useState(false);
  const [currentTag, setcurrentTag] = useState("");
  var k = ["", "", "", ""];
  const OneRadioButton = (props) => {
    const change = (e) => {
      k[props.val] = e.target.value;
      console.log(k);
    };
    return (
      <>
        <div className="radio-btn">
          <RadioButtonUncheckedIcon />
          <input
            type="text"
            onChange={change}
            placeholder={`option ${props.val}`}
          />
        </div>
      </>
    );
  };
  const Answers = () => {
    const [tripType, setTripType] = useState("1");
    return (
      <>
        <div style={{ display: "flex", margin: "3px" }}>
          <div
            className="radio-btn"
            onClick={() => {
              setTripType("1");
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

  var Data = [
    { id: 1, title: "abcccc", author: "a1" },
    { id: 2, title: "acccccb", author: "b1" },
    { id: 3, title: "c", author: "c1" },
    { id: 4, title: "d", author: "d1" },
  ];

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
      </div>
      <div className="radio-btn-container">
        <SearchIcon htmlColor="blue" />

        <input
          type="text"
          placeholder="Search Topic here"
          onChange={(e) => setcurrentTag(e.target.value)}
          onBlur={() => setvisible(false)}
          onClick={() => setvisible(true)}
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
          {visible
            ? Data.filter((post) => {
                if (currentTag === "") {
                  return post;
                } else if (
                  post.title.toLowerCase().includes(currentTag.toLowerCase())
                ) {
                  return post;
                }
              }).map((post, index) => (
                <div key={index}>
                  <div onClick={() => {console.log("hi")}}>
                    <p onClick={() => {console.log("hpp")}}>{post.title}</p>
                    <p>{post.author}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div style={{ backgroundColor: "silver" }}>{tagList}</div>
        <Answers />
      </div>
    </div>
  );
}
