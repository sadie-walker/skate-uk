import React from "react";
import Link from "next/link";
import styles from "../styles/DirectionBlock.module.css";

const DirectionBlock = (props) => {
	const img = require(`../assets/${props.bgImg}`).default.src;
	console.log(img);
	return (
		<Link href={props.href} passHref>
			<div
				className={styles.block}
				style={{
					backgroundImage: `url(${img})`,
				}}
			>
				<h2>{props.title}</h2>
			</div>
		</Link>
	);
};

export default DirectionBlock;
