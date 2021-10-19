import React from "react";
import ThreadList from "./ThreadList";
import styles from "../styles/SubPageLayout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SubPageLayout = (props) => {
	return (
		<section className={styles.subpage}>
			<h1>{props.title}</h1>
			<p>{props.lead}</p>
			<div className={styles.topic}>
				<h2>{props.topic + "s"}</h2>
				<div className={styles.actions}>
					<div className={styles.input}>
						<div>
							<FontAwesomeIcon icon={faSearch} />
						</div>
						<input type="text" />
					</div>
					<button>Add {props.topic}</button>
				</div>
				<ul className={styles["topic-list"]}>
					<li>
						<h3>place 1</h3>
					</li>
					<li>
						<h3>place 2</h3>
					</li>
					<li>
						<h3>place 3</h3>
					</li>
					<li>
						<h3>place 4</h3>
					</li>
				</ul>
			</div>
			<div className={styles.threads}>
				<h2>Discussion</h2>
				<ThreadList threads={props.threads} />
			</div>
		</section>
	);
};

export default SubPageLayout;
