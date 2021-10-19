import React from "react";
import SubPageLayout from "../../components/SubPageLayout";

const artistic = () => {
	const threads = [
		{
			title: "Beginner tips",
			href: "/groups/artistic/beginner-tips",
		},
		{
			title: "Advanced Skills",
			href: "/groups/artistic/advanced-skills",
		},
		{
			title: "Track Suggestions",
			href: "/groups/artistic/track-suggestions",
		},
	];

	return (
		<SubPageLayout
			topic="group"
			title="Artistic"
			lead="Solo or group performances on roller skates"
			threads={threads}
		/>
	);
};

export default artistic;
