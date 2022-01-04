import React from "react";
import ListItem from "./ListItem";
import styles from "../styles/ThreadList.module.css";

const ThreadList = ({ threads }) => {
	// map through theads and return a list
	const threadsArr = Object.values(threads);
	const threadList = threadsArr.map((thread, i) => {
		return (
			<li key={thread.title + i} className={styles.item}>
				<ListItem title={thread.title} type="thread" />
			</li>
		);
	});

	return <ul className={styles.list}>{threadList}</ul>;
};

export default ThreadList;
