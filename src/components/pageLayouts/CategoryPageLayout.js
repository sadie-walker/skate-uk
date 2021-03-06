import React from "react";
import Directions from "../Directions";
import styles from "../../styles/pageLayouts/CategoryPageLayout.module.css";

const CategoryPageLayout = ({ category }) => {
	return (
		<section>
			<h1 className={styles.title}>{category.title}</h1>
			<p>{category.lead}</p>
			<Directions directions={category.types} />
		</section>
	);
};

export default CategoryPageLayout;
