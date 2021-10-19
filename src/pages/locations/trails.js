import React from "react";
import SubPageLayout from "../../components/SubPageLayout";

const trails = () => {
	const threads = [
		{
			title: "Beginner tips",
			href: "/locations/trails/beginner-tips",
			bgImg: "trails.jpg",
		},
		{
			title: "Best way to go down hills",
			href: "/locations/skate-parks/best-way-to-go-down-hills",
			bgImg: "skate-park.jpg",
		},
		{
			title: "To wear protective gear or not",
			href: "/locations/skate-rinks/protective-gear-or-not",
			bgImg: "disco-rink.jpg",
		},
	];

	return (
		<div>
			<SubPageLayout
				topic="Location"
				title="Skate Trails"
				lead="Beautiful outdoor trail skates"
				threads={threads}
			/>
		</div>
	);
};

export default trails;
