import React from "react";
import SubPageLayout from "../../components/SubPageLayout";

import firebaseApp from "../../../database/firebase";
import { getDatabase, ref, get, child } from "firebase/database";

const groupPage = (props) => {
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

export const getStaticPaths = async () => {
	const dbRef = ref(getDatabase(firebaseApp));
	const snapshot = await get(child(dbRef, `groups`));
	const data = snapshot.val();

	const arr = Object.entries(data);
	const paths = arr.map(([key]) => {
		return {
			params: {
				groupsId: key.toString().replace(" ", "-"),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const dbPath = context.params.groupsId.replace("-", " ");
	const dbRef = ref(getDatabase());
	const snapshot = await get(child(dbRef, `groups/${dbPath}`));
	const data = snapshot.val();

	return {
		props: {
			lead: data.lead,
			title: data.title,
			threads: data.threads,
			list: data.groups,
		},
		revalidate: 10000,
	};
};

export default groupPage;
