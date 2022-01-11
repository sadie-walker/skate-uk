import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import NewCommentInput from "../NewCommentInput";

const CommentSection = ({ thread, styles }) => {
	const [comments, setComments] = useState([]);
	let commentsList;

	useEffect(() => {
		if (thread.comments) {
			setComments(thread.comments);
		}
	}, [thread.comments]);

	const updateComments = (updatedComments) => {
		setComments(updatedComments);
	};

	if (comments) {
		commentsList = Object.values(comments).map((comment, i) => {
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
		commentsList = <p>No comments.</p>;
	}

	return (
		<section>
			<h2>Comments</h2>
			<ul className={styles["thread-comments"]}>{commentsList}</ul>
			<NewCommentInput
				comments={comments}
				updateComments={updateComments}
			/>
		</section>
	);
};

export default CommentSection;
