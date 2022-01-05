import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/pageLayouts/SubCategoryItemPageLayout.module.css";
import SubCategoryItemPageDetails from "../SubCategoryItemPageDetails";
import ThreadSection from "./ThreadSection";
import ModalHandler from "../modals/ModalHandler";
import AddThreadModal from "../modals/AddThreadModal";

const SubCategoryItemPageLayout = ({
	pageItem,
	logo,
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
					loader={() => logo}
					src={logo}
					alt="group logo"
					height="200"
					width="300"
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
