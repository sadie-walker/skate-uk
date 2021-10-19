import React from "react";
import SubPageLayout from "../../components/SubPageLayout";

const rollerDerby = () => {
	const threads = [
		{
			title: "Beginner tips",
			href: "/groups/roller-derby/beginner-tips",
		},
		{
			title: "Rules",
			href: "/groups/roller-derby/rules",
		},
		{
			title: "Minimum Skills",
			href: "/groups/roller-derby/Minimum Skills",
		},
	];

	return (
		<SubPageLayout
			topic="group"
			title="Roller Derby"
			lead="A roller skating contact sport played by two teams"
			threads={threads}
		/>
	);
};

export default rollerDerby;
