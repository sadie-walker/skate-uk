import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/navigation/AccountNav.module.css";

const AccountNav = () => {
	const [accMenuOpen, setAccMenuOpen] = useState(false);

	const accountMenuOpenHandler = () => {
		setAccMenuOpen(true);
	};
	const accountMenuCloseHandler = () => {
		setAccMenuOpen(false);
	};

	return (
		<div
			className={styles.acc}
			onMouseEnter={accountMenuOpenHandler}
			onMouseLeave={accountMenuCloseHandler}
		>
			<FontAwesomeIcon icon={faUser} />
			{accMenuOpen && (
				<ul className={styles["acc-menu"]}>
					<li>Username</li>
					<li>Logout</li>
				</ul>
			)}
		</div>
	);
};

export default AccountNav;
