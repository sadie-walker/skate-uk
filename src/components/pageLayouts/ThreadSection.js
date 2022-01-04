import React from "react";
import ThreadList from "../ThreadList";

const ThreadSection = ({ threads, className, openModal }) => {
	const addThreadHandler = (e) => {
		openModal(e);
	};

	return (
		<div className={className}>
			<h2>Threads</h2>
			{threads ? <ThreadList threads={threads} /> : <p>No threads.</p>}
			<button onClick={addThreadHandler} id="addThreadBtn">
				Add Thread
			</button>
		</div>
	);
};

export default ThreadSection;
