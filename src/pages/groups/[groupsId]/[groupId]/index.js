import React, { useState } from "react";
import GroupPageLayout from "../../../../components/GroupPageLayout";

import firebaseApp from "../../../../../firebase/firebase";
import { getDatabase, ref, get, child } from "firebase/database";
import {
	getStorage,
	ref as storageRef,
	getDownloadURL,
} from "firebase/storage";

const groupPage = ({ group, url }) => {
	return <GroupPageLayout group={group} logo={url} />;
};

export const getServerSideProps = async (context) => {
	//fetch groups based on groupsId from database
	const groupsId = context.params.groupsId.replace(/-/g, " ");
	const groupId = context.params.groupId.replace(/-/g, " ");
	const dbRef = ref(getDatabase());
	const snapshot = await get(child(dbRef, `groups/${groupsId}/groups`));
	const data = snapshot.val();

	//select group based on groupId
	const group = data.find((item) => {
		return item.name.toLowerCase() === groupId;
	});

	// fetch logo image from storage
	const storageReference = storageRef(getStorage(firebaseApp));
	const logo = storageRef(storageReference, `images/${group.img}`);
	let logoUrl = await getDownloadURL(logo);

	return {
		props: {
			group,
			url: logoUrl,
		},
	};
};

export default groupPage;
