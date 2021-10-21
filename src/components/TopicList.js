import React from "react";
import styles from "../styles/TopicList.module.css";

const TopicList = (props) => {
	const list = props.list.map((item, i) => {
		return <li key={item.name + i}>{item.name}</li>;
	});

	return <ul className={styles["topic-list"]}>{list}</ul>;
};

export default TopicList;
