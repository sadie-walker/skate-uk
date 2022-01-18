import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const ListItem = (props) => {
	const currentPath = useRouter().asPath;
	const id = props.title.replace(/ /g, "-").toLowerCase();

	return (
		<Link
			href={
				props.type === "thread"
					? `${currentPath}/threads/${id}`
					: `${currentPath}/${id}`
			}
			passHref
		>
			<div>
				<h3>{props.title}</h3>
			</div>
		</Link>
	);
};

export default ListItem;
