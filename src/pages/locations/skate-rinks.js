import React from "react";
import SubPageLayout from "../../components/SubPageLayout";

const discoRinks = () => {
	const threads = [
		{
			title: "Beginner tips",
			href: "/locations/skate-rinks/beginner-tips",
			bgImg: "trails.jpg",
		},
		{
			title: "Kid Zoomies",
			href: "/locations/skate-rinks/kid-zoomies",
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
				title="Skate Rinks & Roller Discos"
				lead="Indoor rinks for a casual skating or artistic/jam skating."
				threads={threads}
			/>
		</div>
	);
};

export default discoRinks;
