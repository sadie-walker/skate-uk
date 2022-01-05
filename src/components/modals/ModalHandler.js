import React, { useState } from "react";
import Portal from "../Portal";
import Modal from "./Modal";

const ModalHandler = ({ closeModal, children }) => {
	return (
		<Portal>
			<Modal closeModal={closeModal}>{children}</Modal>
		</Portal>
	);
};

export default ModalHandler;
