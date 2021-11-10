import React from "react";
import Image from "next/image";
import ThreadList from "./ThreadList";
import styles from "../styles/GroupPageLayout.module.css";

const GroupPageLayout = ({ group, logo }) => {
	return (
		<section>
			<h1>{group.name}</h1>
			<div className={styles["grp-layout-content"]}>
				<Image
					loader={() => logo}
					src={logo}
					alt="group logo"
					height="200"
					width="300"
				></Image>
				<ul>
					<li>
						<strong>Est:</strong> {group.est}
					</li>
					<li>
						<strong>Location:</strong> {group.location}
					</li>
					<li>
						<strong>Email:</strong> {group.email}
					</li>
					<li>
						<strong>Meeting Dates & Times:</strong> {group.meeting}
					</li>
					<li>
						<strong>Website:</strong>{" "}
						<a
							href={group.website}
							target="_blank"
							rel="noreferrer"
						>
							{group.website}
						</a>
					</li>
				</ul>
			</div>
			<div>
				<h2>Threads</h2>
				<ThreadList threads={group.threads} />
			</div>
		</section>
	);
};

export default GroupPageLayout;
