import React from "react";
import styles from "../../styles/ModalContent.module.css";
import { useRouter } from "next/dist/client/router";
import { firebaseApp, storage } from "../../../firebase/firebase";
import { getDatabase, ref, set } from "firebase/database";
import {
	getDownloadURL,
	ref as refStorage,
	uploadBytes,
} from "firebase/storage";

const AddItemModal = ({
	category,
	fields,
	subCategory,
	closeModal,
	refreshPage,
}) => {
	const router = useRouter();

	// map fields into input grps and move image field to end of array
	fields.push(fields.splice(fields.indexOf("Image"), 1)[0]);
	const inputFields = fields.map((field) => {
		if (field === "Image") {
			return (
				<div
					className={styles["modal-form-input-grp"]}
					key={"input-" + field}
				>
					<label htmlFor={field}>{field}</label>
					<input type="file" id={field} name={field} />
				</div>
			);
		}

		return (
			<div
				className={styles["modal-form-input-grp"]}
				key={"input-" + field}
			>
				<label htmlFor={field}>{field}</label>
				<input type="text" id={field} name={field} accept="image/*" />
			</div>
		);
	});

	const submitHandler = async (e) => {
		e.preventDefault();

		// map userinputs to fields
		const userInput = {};
		fields.forEach((field) => {
			userInput[field.toLowerCase()] = e.target[field].value;
		});

		const img = e.target["Image"].files[0];
		let storageRef;
		if (!img) {
			console.log(category);
			if (category === "locations") {
				storageRef = refStorage(
					storage,
					`images/default-${router.query.subCategoryId}.jpg`
				);
			} else {
				storageRef = refStorage(storage, "images/default-group.jpg");
			}
		} else {
			storageRef = refStorage(storage, `images/${img.name}`);
			await uploadBytes(storageRef, img);
		}

		await getDownloadURL(storageRef).then((res) => {
			userInput.image = res;
		});

		// parse name from user input and create new obj with prev items and new item
		const name = JSON.parse(JSON.stringify(userInput)).name;
		const items = {
			...subCategory[category],
		};

		// add new item to items obj
		items[name.toLowerCase()] = userInput;

		// replace items in db
		const db = getDatabase(firebaseApp);
		const categoryId = router.query.categoryId;
		const subCategoryId = router.query.subCategoryId.replace(/-/g, " ");
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
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default AddItemModal;
