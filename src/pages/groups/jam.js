import React from "react";
import SubPageLayout from "../../components/SubPageLayout";

const jam = () => {
	const threads = [
		{
			title: "Beginner Tips",
			href: "/groups/jam/beginner-tips",
		},
		{
			title: "Advanced Skills",
			href: "/groups/jam/advanced-skills",
		},
		{
			title: "Group vs Solo",
			href: "/groups/jam/group-vs-solo",
		},
	];

	return (
		<SubPageLayout
			topic="group"
			title="Jam Skating"
			lead="Skating style consisting of a combination of dance, gymnactics and roller skating"
			threads={threads}
		/>
	);
};

export default jam;
