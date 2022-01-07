import React from "react";
import ActionBar from "../ActionBar";
import ThreadList from "../ThreadList";

const ThreadSection = ({ threads, className, openModal }) => {
	return (
		<div className={className}>
			<h2>Threads</h2>
			<ActionBar
				category="threads"
				openModal={openModal}
				id="addThreadBtn"
			/>
			{threads ? <ThreadList threads={threads} /> : <p>No threads.</p>}
		</div>
	);
};

export default ThreadSection;
