import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const ListItem = (props) => {
	const currentPath = useRouter().asPath;
	const id = props.title.replace(/ /g, "-").toLowerCase();

	return (
		<Link href={`${currentPath}/${id}`} passHref>
			<div>
				<h2>{props.title}</h2>
			</div>
		</Link>
	);
};

export default ListItem;
