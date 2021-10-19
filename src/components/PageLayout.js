import React from "react";
import Directions from "../components/Directions";
import styles from "../styles/PageLayout.module.css";

const PageLayout = (props) => {
	return (
		<section>
			<h1 className={styles.title}>{props.title}</h1>
			<p>{props.lead}</p>
			<Directions directions={props.directions} width="1fr" />
		</section>
	);
};

export default PageLayout;
