import React from "react";
import styles from "../styles/TopicList.module.css";
import ListItem from "./ListItem";

const TopicList = ({ list }) => {
	let listItems;
	if (list) {
		const listArr = Object.values(list);

		listItems = listArr.map((item, i) => {
			return (
				<li
					key={item.name + i}
					className={styles["list-item"]}
					style={{
						backgroundImage: `url(${item.image})`,
					}}
				>
					<ListItem title={item.name} />
				</li>
			);
		});
	}

	return <ul className={styles["topic-list"]}>{listItems}</ul>;
};

export default TopicList;
