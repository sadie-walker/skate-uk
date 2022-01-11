import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/pageLayouts/ThreadPageLayout.module.css";
import CommentSection from "./CommentSection";

const ThreadPageLayout = ({ parentPage, thread }) => {
	return (
		<section className={styles["thread"]}>
			<h1>
				<em>{parentPage}</em>
				<br />
				{thread.title}
			</h1>
			<div className={styles["thread-post"]}>
				<p>{thread.post}</p>
				<div className={styles["thread-post-credentials"]}>
					<p>Posted by: {thread.author}</p>
					<p>Date posted: {thread.date}</p>
				</div>
				<div className={styles["thread-rating"]}>
					<div className={styles["thread-rating-icon"]}>
						<FontAwesomeIcon icon={faThumbsUp} />
					</div>
					<div className={styles["thread-rating-icon"]}>
						<FontAwesomeIcon icon={faThumbsDown} />
					</div>
				</div>
			</div>
			<CommentSection thread={thread} styles={styles} />
		</section>
	);
};

export default ThreadPageLayout;
