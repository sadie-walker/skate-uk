import React from "react";
import { ref, get, getDatabase, child } from "firebase/database";
import ThreadPageLayout from "../../../../components/ThreadPageLayout";

const threadPage = ({ group, thread }) => {
	return <ThreadPageLayout group={group} thread={thread} />;
};

export const getServerSideProps = async (context) => {
	//fetch groups based on groupsId from database
	const groupsId = context.params.groupsId.replace(/-/g, " ");
	const groupId = context.params.groupId.replace(/-/g, " ");
	const threadId = context.params.threadId.replace(/-/g, " ");

	const dbRef = ref(getDatabase());
	const snapshot = await get(child(dbRef, `groups/${groupsId}/groups`));
	const data = snapshot.val();

	//select group based on groupId
	const group = data.find((item) => {
		return item.name.toLowerCase() === groupId;
	});

	// select thread based on title
	const thread = group.threads.find((item) => {
		return item.title.toLowerCase() === threadId;
	});

	return {
		props: {
			group: group.name,
			thread,
		},
	};
};

export default threadPage;
