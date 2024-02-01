import React, { useState } from "react";
import "./Navbar.css";

export default function SimpleInt() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [si, setSi] = useState("");

  const calculateSimpleInterest = (event) => {
    console.log("button Clicked");
    const principleNum = parseFloat(principle);
    const rateNum = parseFloat(rate);
    const timeNum = parseFloat(time);

    const si = (principleNum * rateNum * timeNum) / 100;
    setSi(si);

    event.preventDefault();
  };

  return (
    <div className="text-center container my-4">
      <h1 className="head">Simple Interest</h1>
      <div className="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          value={principle}
          onChange={function (event) {
            setPrinciple(event.target.value);
          }}
        />
        <label for="floatingInput">Principle</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="floatingPassword"
          value={rate}
          onChange={function (event) {
            setRate(event.target.value);
          }}
        />
        <label for="floatingPassword">Rate(%)</label>
      </div>
      <div className="form-floating">
        <input
          type="number"
          class="form-control"
          id="floatingPassword"
          value={time}
          onChange={function (event) {
            setTime(event.target.value);
          }}
        />
        <label for="floatingPassword">Time</label>
      </div>
      <button className="btn btn-success m-3" onClick={calculateSimpleInterest}>
        Calculate
      </button>
      <h3 className="mb-4">Simple Interest is {si}</h3>
      <h6 className="text-left">Current Principle: {principle}</h6>
      <h6 className="text-left">Current Rate: {rate}</h6>
      <h6 className="text-left">Current Time: {time}</h6>
    </div>
  );
}
