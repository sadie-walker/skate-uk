import React, { useState } from "react";
import styles from "../../styles/pageLayouts/SubCategoryPageLayout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import TopicList from "../TopicList";
import ThreadSection from "./ThreadSection";
import ModalHandler from "../ModalHandler";
import AddItemModal from "../AddItemModal";
import AddThreadModal from "../AddThreadModal";

const SubCategoryPageLayout = ({
	category,
	subCategory,
	fields,
	refreshPage,
	threads,
}) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalTypeIsThread, setModalTypeIsThread] = useState(false);

	const openModalHandler = (e) => {
		if (e.target.id.toLowerCase().includes("item")) {
			setModalTypeIsThread(false);
		} else {
			setModalTypeIsThread(true);
		}
		setModalOpen(true);
	};

	const closeModalHandler = () => {
		setModalOpen(false);
	};

	return (
		<section className={styles.subpage}>
			<h1>{subCategory.title}</h1>
			<p>{subCategory.lead}</p>
			<div className={styles.topic}>
				<h2>{category}</h2>
				<div className={styles.actions}>
					<div className={styles.input}>
						<div>
							<FontAwesomeIcon icon={faSearch} />
						</div>
						<input type="text" />
					</div>
					<button onClick={openModalHandler} id="addItemBtn">
						Add {category.substr(0, category.length - 1)}
					</button>
				</div>
				<TopicList list={subCategory[category]} />
			</div>
			<ThreadSection
				threads={threads}
				className={styles.threads}
				openModal={openModalHandler}
			/>
			{modalOpen && (
				<ModalHandler closeModal={closeModalHandler}>
					{modalTypeIsThread ? (
						<AddThreadModal
							closeModal={closeModalHandler}
							refreshPage={refreshPage}
							threads={threads}
						/>
					) : (
						<AddItemModal
							category={category}
							closeModal={closeModalHandler}
							fields={fields}
							subCategory={subCategory}
							refreshPage={refreshPage}
						/>
					)}
				</ModalHandler>
			)}
		</section>
	);
};

export default SubCategoryPageLayout;
