import React, { useRef } from "react";
import styles from "../../styles/Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ children, closeModal }) => {
	const onCloseHandler = (e) => {
		e.stopPropagation();
		closeModal();
	};

	return (
		<section className={styles["background-overlay"]}>
			<div className={styles.modal}>
				<FontAwesomeIcon icon={faTimes} onClick={onCloseHandler} />
				{children}
			</div>
		</section>
	);
};

export default Modal;
