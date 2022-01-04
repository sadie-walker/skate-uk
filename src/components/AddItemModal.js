import React, { useState, useEffect } from "react";
import styles from "../styles/ModalContent.module.css";
import firebaseApp from "../../firebase/firebase";
import { getDatabase, ref, set } from "firebase/database";
import { useRouter } from "next/dist/client/router";

const AddItemModal = ({
	category,
	fields,
	subCategory,
	closeModal,
	refreshPage,
}) => {
	const router = useRouter();

	const inputFields = fields.map((field) => {
		return (
			<div
				className={styles["modal-form-input-grp"]}
				key={"input-" + field}
			>
				<label htmlFor={field}>{field}</label>
				<input type="text" id={field} name={field} />
			</div>
		);
	});

	const submitHandler = (e) => {
		e.preventDefault();

		// map userinputs to fields
		const userInput = {};
		fields.forEach((field) => {
			userInput[field.toLowerCase()] = e.target[field].value;
		});

		// parse name from user input and create new obj with prev items and new item
		const name = JSON.parse(JSON.stringify(userInput)).name;
		const items = {
			...subCategory[category],
		};
		items[name.toLowerCase()] = userInput;

		// replace items in db
		const categoryId = router.query.categoryId;
		const subCategoryId = router.query.subCategoryId.replace(/-/g, " ");
		const db = getDatabase(firebaseApp);
		set(
			ref(
				db,
				`/categories/${categoryId}/types/${subCategoryId}/${categoryId}`
			),
			items
		);

		closeModal();
		refreshPage();
	};

	return (
		<div className={styles["modal-content"]}>
			<h2>Add new {category.substr(0, category.length - 1)}</h2>
			<form className={styles["modal-form"]} onSubmit={submitHandler}>
				{inputFields}
				<div
					className={styles["modal-form-input-grp"]}
					key={"input-img"}
				>
					<label htmlFor="img">Image</label>
					<input type="text" id="img" name="image" />
				</div>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default AddItemModal;
