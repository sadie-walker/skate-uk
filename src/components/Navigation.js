import React, { useState } from "react";
import styles from "../styles/Navigation.module.css";
import NavigationItem from "./NavigationItem";
import LoginNav from "./LoginNav";
import AccountNav from "./AccountNav";

const Navigation = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	return (
		<nav className={styles.nav}>
			<ul className={styles.links}>
				<NavigationItem
					title={"Locations"}
					href={"/locations"}
					hasSubMenu={true}
				/>
				<NavigationItem
					title={"Groups"}
					href={"/groups"}
					hasSubMenu={true}
				/>
				<NavigationItem
					title={"Equipment"}
					href={"/equipment"}
					hasSubMenu={false}
				/>
			</ul>
			{!isLoggedIn ? <LoginNav /> : <AccountNav />}
		</nav>
	);
};

export default Navigation;
