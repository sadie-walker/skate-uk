import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from "../../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Ratings.module.css";

const Ratings = (props) => {
	const [likes, setLikes] = useState(props.likes);
	const [dislikes, setDislikes] = useState(props.dislikes);

	const router = useRouter();
	const db = getDatabase(firebaseApp);

	const categoryId = router.query.categoryId;
	const subCategoryId = router.query.subCategoryId.replace(/-/g, " ");
	let subCategoryItemId;
	if (router.query.subCategoryItemId) {
		subCategoryItemId = router.query.subCategoryItemId.replace(/-/g, " ");
	}
	const threadId = router.query.threadId.replace(/-/g, " ");

	// update likes in db
	const updateLikes = () => {
		set(
			ref(
				db,
				`/threads/${categoryId}/${subCategoryId}/${categoryId}/${subCategoryItemId}/${threadId}/likes`
			),
			likes
		);
	};

	// update dislikes in db
	const updateDislikes = () => {
		set(
			ref(
				db,
				`/threads/${categoryId}/${subCategoryId}/${categoryId}/${subCategoryItemId}/${threadId}/dislikes`
			),
			dislikes
		);
	};

	// call updateLikes when likes state changes
	useEffect(() => {
		if (likes) {
			updateLikes();
		}
	}, [likes]);

	// call updateDislikes when dislikes state changes
	useEffect(() => {
		if (dislikes) {
			updateDislikes();
		}
	}, [dislikes]);

	// set likes
	const likeClickHandler = () => {
		setLikes((prev) => prev + 1);
	};

	// set dislikes
	const dislikeClickHandler = () => {
		setDislikes((prev) => prev + 1);
	};

	return (
		<div className={`${styles["ratings"]} ${styles[`${props.type}`]}`}>
			<div className={styles["rating"]}>
				<div className={styles["rating-counter"]}>
					<p>{likes}</p>
				</div>
				<div
					className={styles["rating-icon"]}
					onClick={likeClickHandler}
				>
					<FontAwesomeIcon icon={faThumbsUp} />
				</div>
			</div>
			<div className={styles["rating"]}>
				<div className={styles["rating-counter"]}>
					<p>{dislikes}</p>
				</div>
				<div
					className={styles["rating-icon"]}
					onClick={dislikeClickHandler}
				>
					<FontAwesomeIcon icon={faThumbsDown} />
				</div>
			</div>
		</div>
	);
};

export default Ratings;
