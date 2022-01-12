import React, { useEffect, useState } from "react";
import NewCommentInput from "../NewCommentInput";
import Ratings from "../Ratings";

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
					<Ratings
						likes={comment.likes}
						dislikes={comment.dislikes}
						type="comment"
					/>
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
