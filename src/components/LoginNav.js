import React from "react";
import Link from "next/link";
import styles from "../styles/LoginNav.module.css";

const LoginNav = () => {
	return (
		<ul className={styles.login}>
			<li>
				<Link href="/log-in">Log In</Link>
			</li>
			<li>
				<Link href="/sign-up">Sign Up</Link>
			</li>
		</ul>
	);
};

export default LoginNav;
