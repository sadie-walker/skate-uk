import React from "react";
import DirectionBlock from "./DirectionBlock";
import styles from "../styles/Directions.module.css";

const Directions = (props) => {
	const directionBlocks = props.directions.map((direction, i) => {
		return (
			<DirectionBlock
				key={direction.title + i}
				title={direction.title}
				href={direction.href}
				bgImg={direction.bgImg}
			/>
		);
	});

	return (
		<section
			className={styles.directions}
			style={{ gridTemplateColumns: props.width }}
		>
			{directionBlocks}
		</section>
	);
};

export default Directions;
