import React from "react";
import Navigation from "./Navigation";
import styles from "../styles/Layout.module.css";

const Layout = (props) => {
	return (
		<>
			<header>
				<Navigation />
			</header>
			<main className={styles.container}>{props.children}</main>
		</>
	);
};

export default Layout;
