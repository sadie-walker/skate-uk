import React from "react";
import { useRouter } from "next/dist/client/router";
import firebaseApp from "../../firebase/firebase";
import { getDatabase, ref, set } from "firebase/database";
import styles from "../styles/NewCommentInput.module.css";

const NewCommentInput = ({ comments, updateComments }) => {
	const router = useRouter();

	const inputKeyPressHandler = (e) => {
		const d = new Date();

		if (e.key === "Enter") {
			// get new comment from form and add to object with previous threads
			const updatedComments = {
				...comments,
			};

			updatedComments[e.target.value] = {
				comment: e.target.value,
				author: "user num",
				date: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
				time: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
				likes: 0,
				dislikes: 0,
			};

			// replace comments in db with new obj of threads
			const categoryId = router.query.categoryId;
			const subCategoryId = router.query.subCategoryId.replace(/-/g, " ");
			let subCategoryItemId = router.query.subCategoryItemId;

			const threadId = router.query.threadId.replace(/-/g, " ");

			const db = getDatabase(firebaseApp);

			if (subCategoryItemId) {
				subCategoryItemId = subCategoryItemId.replace(/-/g, " ");
				set(
					ref(
						db,
						`/threads/${categoryId}/${subCategoryId}/${categoryId}/${subCategoryItemId}/${threadId}/comments`
					),
					updatedComments
				);
			} else {
				set(
					ref(
						db,
						`/threads/${categoryId}/${subCategoryId}/threads/${threadId}/comments`
					),
					updatedComments
				);
			}

			updateComments(updatedComments);
		}
	};

	return (
		<div className={styles["new-comment-input-grp"]}>
			<label htmlFor="comment" className={styles["new-comment-label"]}>
				USERNAME
			</label>
			<input
				type="text"
				name="comment"
				className={styles["new-comment-input"]}
				placeholder="Add new comment..."
				onKeyPress={inputKeyPressHandler}
			/>
		</div>
	);
};

export default NewCommentInput;
