import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/pageLayouts/SubCategoryItemPageLayout.module.css";
import SubCategoryItemPageDetails from "../SubCategoryItemPageDetails";
import ThreadSection from "./ThreadSection";
import ModalHandler from "../modals/ModalHandler";
import AddThreadModal from "../modals/AddThreadModal";

const SubCategoryItemPageLayout = ({
	pageItem,
	fields,
	threads,
	refreshPage,
}) => {
	const [modalOpen, setModalOpen] = useState(false);

	const toggleModalHandler = (e) => {
		setModalOpen((prev) => {
			return !prev;
		});
	};

	return (
		<section>
			<h1>{pageItem.name}</h1>
			<div className={styles["grp-layout-content"]}>
				<Image
					loader={() => pageItem.image}
					src={pageItem.image}
					alt="logo"
					height={250}
					width={350}
				></Image>
				<SubCategoryItemPageDetails
					pageItem={pageItem}
					fields={fields}
				/>
			</div>
			<ThreadSection threads={threads} openModal={toggleModalHandler} />
			{modalOpen && (
				<ModalHandler closeModal={toggleModalHandler}>
					<AddThreadModal
						closeModal={toggleModalHandler}
						refreshPage={refreshPage}
						threads={threads}
					/>
				</ModalHandler>
			)}
		</section>
	);
};

export default SubCategoryItemPageLayout;
