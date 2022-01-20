import React from "react";
import Link from "next/link";
import styles from "../styles/DirectionBlock.module.css";

const DirectionBlock = (props) => {
	return (
		<Link href={props.href} passHref>
			<div
				className={styles.block}
				style={{
					backgroundImage: `url(${props.bgImg})`,
				}}
			>
				<h2>{props.title}</h2>
			</div>
		</Link>
	);
};

export default DirectionBlock;
