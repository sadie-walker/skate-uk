import React from "react";
import Link from "next/link";

const ThreadListItem = (props) => {
	return (
		<div>
			<Link href={props.href} passHref>
				<div>
					<h2>{props.title}</h2>
				</div>
			</Link>
		</div>
	);
};

export default ThreadListItem;
