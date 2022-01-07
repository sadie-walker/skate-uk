import React, { useState } from "react";
import styles from "../../styles/pageLayouts/SubCategoryPageLayout.module.css";

import TopicList from "../TopicList";
import ThreadSection from "./ThreadSection";
import ModalHandler from "../modals/ModalHandler";
import AddItemModal from "../modals/AddItemModal";
import AddThreadModal from "../modals/AddThreadModal";
import ActionBar from "../ActionBar";

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
				<ActionBar
					category={category}
					openModal={openModalHandler}
					id="addItemBtn"
				/>
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
