import React from "react";
import Image from "next/image";
import ThreadList from "../ThreadList";
import styles from "LocationPageLayout.module.css";

const LocationPageLayout = ({ location }) => {
	return (
		<section>
			<h1>{location.name}</h1>
			<div className={styles["location-layout-content"]}>
				<Image
					loader={() => logo}
					src={logo}
					alt="image of location"
					height="200"
					width="300"
				></Image>
				<ul>
					<li>
						<strong>Location:</strong> {location.location}
					</li>
					<li>
						<strong>Experience Level/s:</strong> {location.exp}
					</li>
				</ul>
			</div>
			<div>
				<h2>Threads</h2>
				<ThreadList threads={location.threads} />
			</div>
		</section>
	);
};

export default LocationPageLayout;
