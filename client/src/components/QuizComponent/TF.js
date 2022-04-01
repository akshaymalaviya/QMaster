import React, { useState } from "react";
export default function TF() {
  const [tripType, setTripType] = useState("oneWay");
  return (
    <div className="App">
      <div className="radio-btn-container">
        <div
          className="radio-btn"
          onClick={() => {
            setTripType("oneWay");
          }}
        >
          <input
            type="radio"
            value={tripType}
            name="tripType"
            checked={tripType === "oneWay"}
          />
          True
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setTripType("roundTrip");
          }}
        >
          <input
            type="radio"
            value={tripType}
            name="tripType"
            checked={tripType === "roundTrip"}
          />
          False
        </div>
      </div>
    </div>
  );
}
