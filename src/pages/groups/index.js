import React from "react";
import PageLayout from "../../components/PageLayout";

const index = () => {
	const directions = [
		{
			title: "Roller Derby",
			href: "/groups/roller-derby",
			bgImg: "trails.jpg",
		},
		{
			title: "Artistic",
			href: "/groups/artistic",
			bgImg: "skate-park.jpg",
		},
		{
			title: "Jam Skating",
			href: "/groups/jam",
			bgImg: "disco-rink.jpg",
		},
		{
			title: "Other",
			href: "/groups/other",
			bgImg: "disco-rink.jpg",
		},
	];

	return (
		<PageLayout
			title="Find a group to skate with"
			lead="There are lots of super fun skate groups to join in the UK - why not
	try something new!"
			directions={directions}
		/>
	);
};

export default index;
