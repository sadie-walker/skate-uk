import React from "react";
import SubPageLayout from "../../components/SubPageLayout";

import { getDatabase, ref, get, child } from "firebase/database";

const groupPage = (props) => {
	console.log(props.title);
	return (
		<SubPageLayout
			topic="group"
			title={props.title}
			lead={props.lead}
			threads={props.threads}
			list={props.list}
		/>
	);
};

export async function getServerSideProps(context) {
	const dbPath = context.params.groupsId.replace("-", " ");
	const dbRef = ref(getDatabase());
	const snapshot = await get(child(dbRef, `groups/${dbPath}`));
	const data = snapshot.val();

	return {
		props: {
			lead: data.lead,
			title: data.title,
			// threads: data.threads,
			list: data.groups,
		},
	};
}

export default groupPage;
