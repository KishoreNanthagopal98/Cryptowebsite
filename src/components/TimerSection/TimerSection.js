import React, { useState, useEffect } from "react";
import "./timersection.scss";

const TimerSection = ({ timerProp, timerStatus }) => {
  const [localTimer, setLocalTimer] = useState(0);

  useEffect(() => {
	let intervalId;
	console.log(localTimer)
	if (timerStatus && localTimer > 0) {
	  intervalId = setInterval(() => {
		setLocalTimer(localTimer - 1);
	  }, 1000);
	} else {
	  clearInterval(intervalId); // Clear interval when timer is stopped
	  setLocalTimer(timerProp);
	}
  }, [timerStatus, localTimer]);

  return (
    <div className="timerSection">
      <div className="scoreSection">
        <span className="score">Timer</span>
        <span className="hits">{localTimer}</span>
      </div>
    </div>
  );
};

export default TimerSection;