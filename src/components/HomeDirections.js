import React from "react";
import DirectionBlock from "./DirectionBlock";
import styles from "../styles/HomeDirections.module.css";

const HomeDirections = () => {
	const directions = [
		{
			title: "Find somewhere to skate",
			href: "/locations",
			linkName: "Find Location ->",
			bgImg: "location.jpg",
		},
		{
			title: "Find people to skate with",
			href: "/groups",
			linkName: "Find a Group ->",
			bgImg: "group-skating.jpg",
		},
		{
			title: "Get equipment recommendations",
			href: "/equipment",
			linkName: "Equipment Recs ->",
			bgImg: "equipment.jpg",
		},
	];

	const directionBlocks = directions.map((direction, i) => {
		return (
			<DirectionBlock
				key={direction.title + i}
				title={direction.title}
				href={direction.href}
				linkName={direction.linkName}
				bgImg={direction.bgImg}
			/>
		);
	});

	return <section className={styles.directions}>{directionBlocks}</section>;
};

export default HomeDirections;
