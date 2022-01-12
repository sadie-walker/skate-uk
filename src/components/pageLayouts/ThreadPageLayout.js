import React from "react";
import Ratings from "../Ratings";
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
				<Ratings
					likes={thread.likes}
					dislikes={thread.dislikes}
					type="thread"
				/>
			</div>
			<CommentSection thread={thread} styles={styles} />
		</section>
	);
};

export default ThreadPageLayout;
