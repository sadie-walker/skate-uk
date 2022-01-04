import React from "react";
import Image from "next/image";
import styles from "../../styles/pageLayouts/SubCategoryItemPageLayout.module.css";
import SubCategoryItemPageDetails from "../SubCategoryItemPageDetails";
import ThreadSection from "./ThreadSection";

const SubCategoryItemPageLayout = ({ pageItem, logo, fields, threads }) => {
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
			<ThreadSection threads={threads} className={className} />
		</section>
	);
};

export default SubCategoryItemPageLayout;
