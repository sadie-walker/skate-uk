import React from "react";
import DirectionBlock from "./DirectionBlock";
import styles from "../styles/Directions.module.css";

const Directions = (props) => {
	let directionBlocks;
	if (props.directions !== undefined) {
		// create homepage directions to main categories
		directionBlocks = props.directions.map((item, i) => {
			return (
				<DirectionBlock
					key={item.title + i}
					title={item.title}
					href={item.href}
					bgImg={item.bgImg}
				/>
			);
		});
	} else {
		// convert subcategories into array to create directional blocks for each subcat
		const subCats = Object.values(props.subcategories);
		directionBlocks = subCats.map((item, i) => {
			return (
				<DirectionBlock
					key={item.title + i}
					title={item.title}
					href={`/${props.category}/${item.title
						.toLowerCase()
						.replace(/ /g, "-")}`}
					bgImg={item.bgImg}
				/>
			);
		});
	}

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
