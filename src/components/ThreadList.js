import React from "react";
import ThreadListItem from "./ThreadListItem";
import styles from "../styles/ThreadList.module.css";

const ThreadList = (props) => {
	const threadList = props.threads.map((thread, i) => {
		return (
			<li key={thread.title + i} className={styles.item}>
				<ThreadListItem title={thread.title} href={thread.href} />
			</li>
		);
	});

	return <ul className={styles.list}>{threadList}</ul>;
};

export default ThreadList;
