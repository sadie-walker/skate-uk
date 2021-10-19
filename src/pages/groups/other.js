import React from "react";
import SubPageLayout from "../../components/SubPageLayout";

const other = () => {
	const threads = [
		{
			title: "Marathon Tips",
			href: "/groups/other/marathon-tips",
		},
		{
			title: "Skate Park Meetup",
			href: "/groups/other/skate-park-meetup",
		},
		{
			title: "Group StartUp Suggestions",
			href: "/groups/other/group-startup-suggestions",
		},
	];

	return (
		<SubPageLayout
			topic="group"
			title="Other"
			lead="Any adhoc groups for skating - social, organsised trails, marathons etc"
			threads={threads}
		/>
	);
};

export default other;
