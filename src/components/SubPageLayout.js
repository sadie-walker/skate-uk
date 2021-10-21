import React from "react";
import ThreadList from "./ThreadList";
import styles from "../styles/SubPageLayout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TopicList from "./TopicList";

const SubPageLayout = (props) => {
	return (
		<section className={styles.subpage}>
			<h1>{props.title}</h1>
			<p>{props.lead}</p>
			<div className={styles.topic}>
				<h2>{props.topic}</h2>
				<div className={styles.actions}>
					<div className={styles.input}>
						<div>
							<FontAwesomeIcon icon={faSearch} />
						</div>
						<input type="text" />
					</div>
					<button>Add {props.topic}</button>
				</div>
				<TopicList list={props.list} />
			</div>
			<div className={styles.threads}>
				<h2>Discussion</h2>
				<ThreadList threads={props.threads} />
			</div>
		</section>
	);
};

export default SubPageLayout;
