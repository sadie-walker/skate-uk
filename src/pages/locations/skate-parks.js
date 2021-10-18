import React from "react";
import SubPageLayout from "../../components/SubPageLayout";

const skateParks = () => {
	const threads = [
		{
			title: "Beginner tips",
			href: "/locations/skate-parks/beginner-tips",
			bgImg: "trails.jpg",
		},
		{
			title: "Advanced Tricks",
			href: "/locations/skate-parks/advanced-tricks",
			bgImg: "skate-park.jpg",
		},
		{
			title: "Indoor vs Outdoor",
			href: "/locations/skate-parks/indoor-vs-outdoor",
			bgImg: "disco-rink.jpg",
		},
	];

	return (
		<div>
			<SubPageLayout
				title="Skate Parks"
				lead="Indoor & outdoor skate parks with ramps & other equipment."
				threads={threads}
			/>
		</div>
	);
};

export default skateParks;
