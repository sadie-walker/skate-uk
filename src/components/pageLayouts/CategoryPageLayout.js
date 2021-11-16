import React from "react";
import Directions from "../Directions";
import styles from "../../styles/CategoryPageLayout.module.css";

const CategoryPageLayout = (props) => {
	return (
		<section>
			<h1 className={styles.title}>{props.title}</h1>
			<p>{props.lead}</p>
			<Directions
				category={props.category}
				subcategories={props.subcategories}
				width="1fr"
			/>
		</section>
	);
};

export default CategoryPageLayout;
