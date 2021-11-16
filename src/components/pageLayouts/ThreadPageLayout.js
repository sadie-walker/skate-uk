import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/ThreadPageLayout.module.css";

const ThreadPageLayout = ({ parentPage, thread }) => {
	let comments;
	if (thread.comments && thread.comments.length > 0) {
		comments = thread.comments.map((comment, i) => {
			return (
				<li key={"com_" + i}>
					{comment.author}: {comment.comment}
					<p>Posted: {comment.date}</p>
					<div className={styles["thread-rating"]}>
						<div className={styles["thread-rating-icon"]}>
							<FontAwesomeIcon icon={faThumbsUp} />
						</div>
						<div className={styles["thread-rating-icon"]}>
							<FontAwesomeIcon icon={faThumbsDown} />
						</div>
					</div>
				</li>
			);
		});
	} else {
		comments = <p>No comments.</p>;
	}

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
			<h2>Comments</h2>
			<ul className={styles["thread-comments"]}>{comments}</ul>
		</section>
	);
};

export default ThreadPageLayout;
