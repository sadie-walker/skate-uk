import React from "react";
import Directions from "../../components/Directions";

const index = () => {
	const directions = [
		{
			title: "Skate Trails",
			href: "/locations/trails",
			bgImg: "trails.jpg",
		},
		{
			title: "Skate Parks",
			href: "/locations/skate-parks",
			bgImg: "skate-park.jpg",
		},
		{
			title: "Discos / Rinks",
			href: "/locations/disco-rinks",
			bgImg: "disco-rink.jpg",
		},
	];

	return (
		<section>
			<h1>Find somewhere to skate</h1>
			<Directions directions={directions} width="1fr" />
		</section>
	);
};

export default index;
