import React from "react";
import PageLayout from "../../components/PageLayout";

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
			href: "/locations/skate-rinks",
			bgImg: "disco-rink.jpg",
		},
	];

	return (
		<PageLayout
			title="Find somewhere to skate"
			lead="There are lots of super fun places to skate in the UK - why not
	try somewhere new!"
			directions={directions}
		/>
	);
};

export default index;
