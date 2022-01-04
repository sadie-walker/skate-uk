import React from "react";
import firebaseApp from "../../firebase/firebase";
import { useRouter } from "next/dist/client/router";
import { getDatabase, ref, set } from "firebase/database";
import styles from "../styles/ModalContent.module.css";

const AddThreadModal = ({ closeModal, refreshPage, threads }) => {
	const router = useRouter();

	const submitHandler = (e) => {
		e.preventDefault();

		// get new thread from form and add to object with previous threads
		const updatedThreads = {
			...threads,
		};
		updatedThreads[e.target.title.value] = {
			title: e.target.title.value,
			post: e.target.post.value,
		};

		// replace threads in db with new obj of threads
		const categoryId = router.query.categoryId;
		const subCategoryId = router.query.subCategoryId.replace(/-/g, " ");
		const db = getDatabase(firebaseApp);
		set(ref(db, `/threads/${categoryId}/${subCategoryId}`), updatedThreads);

		// close modal and refresh page for threadlist to update visually
		closeModal();
		refreshPage();
	};

	return (
		<div className={styles["modal-content"]}>
			<h2>Add new thread</h2>
			<form onSubmit={submitHandler} className={styles["modal-form"]}>
				<div className={styles["modal-form-input-grp"]}>
					<label htmlFor="title">Title</label>
					<input name="title" type="text" />
				</div>
				<div className={styles["modal-form-input-grp"]}>
					<label htmlFor="post">Post</label>
					<textarea name="post" cols="60" rows="10"></textarea>
				</div>
				<button type="submit">Post</button>
			</form>
		</div>
	);
};

export default AddThreadModal;
