import React from "react";
import Link from "next/link";
import styles from "../../styles/SubMenu.module.css";

const SubMenu = (props) => {
	const lis = props.links.map((link, i) => {
		return (
			<li key={"sub" + i}>
				<Link href={link.href}>{link.title}</Link>
			</li>
		);
	});
	return <ul className={styles.submenu}>{lis}</ul>;
};

export default SubMenu;
