import React from "react";
import styles from "../styles/TopicList.module.css";
import ListItem from "./ListItem";

const TopicList = ({ list }) => {
	let listItems;
	if (list) {
		const listArr = Object.keys(list);
		listItems = listArr.map((item, i) => {
			return (
				<li key={item + i} className={styles["list-item"]}>
					<ListItem title={item} />
				</li>
			);
		});
	}

	return <ul className={styles["topic-list"]}>{listItems}</ul>;
};

export default TopicList;
