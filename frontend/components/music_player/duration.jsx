import React from "react";

const Duration = ({ seconds }) => {
	if (seconds === null) {
		return <div className="time-null">0:00</div>;
	} else {
		return <time dateTime={Math.round(seconds)}>{parseDuration(seconds)}</time>;
		// return (
		//   <div>
		//     {seconds}
		//   </div>
		// )
	}
};

const parseDuration = seconds => {
	const date = new Date(seconds * 1000);
	const hh = date.getUTCHours();
	const mm = date.getUTCMinutes();
	const ss = pad(date.getUTCSeconds());
	if (hh) {
		return `${hh}:${pad(mm)}:${ss}`;
	}
	return `${mm}:${ss}`;
};

const pad = string => {
	return ("0" + string).slice(-2);
};

export default Duration;
