import React from "react";
import Image from "next/image";
import ThreadList from "../ThreadList";
import styles from "../../styles/SubCategoryItemPageLayout.module.css";
import SubCategoryItemPageDetails from "../SubCategoryItemPageDetails";

const SubCategoryItemPageLayout = ({ pageItem, logo }) => {
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
				<SubCategoryItemPageDetails pageItem={pageItem} />
			</div>
			<div>
				<h2>Threads</h2>
				<ThreadList threads={pageItem.threads} />
			</div>
		</section>
	);
};

export default SubCategoryItemPageLayout;
