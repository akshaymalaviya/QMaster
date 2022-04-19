import React,{useState} from 'react'

export default function AnswerRadio() {
    // flag ? dataCheck.answer :
    var ans='1';
        const [tripType, setTripType] = useState("1");
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


}
