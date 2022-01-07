import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/ActionBar.module.css";

const ActionBar = ({ openModal, category, id }) => {
	const openModalHandler = (e) => {
		openModal(e);
	};

	return (
		<div className={styles.actions}>
			<div className={styles.input}>
				<div>
					<FontAwesomeIcon icon={faSearch} />
				</div>
				<input type="text" />
			</div>
			<button onClick={openModalHandler} id={id}>
				Add {category.substr(0, category.length - 1)}
			</button>
		</div>
	);
};

export default ActionBar;
