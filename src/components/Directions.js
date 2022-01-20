import React from "react";
import DirectionBlock from "./DirectionBlock";
import styles from "../styles/Directions.module.css";

const Directions = (props) => {
	console.log(props);
	const directionBlocks = Object.values(props.directions).map((item, i) => {
		return (
			<DirectionBlock
				key={item.title + i}
				title={item.title}
				href={item.href}
				bgImg={item.bgImg}
			/>
		);
	});

	return (
		<section className={`${styles.directions} ${styles[props.classes]}`}>
			{directionBlocks}
		</section>
	);
};

export default Directions;
