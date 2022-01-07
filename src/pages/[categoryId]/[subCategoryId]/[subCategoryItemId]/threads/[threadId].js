import React from "react";
import { ref, get, getDatabase, child } from "firebase/database";
import ThreadPageLayout from "../../../../../components/pageLayouts/ThreadPageLayout";

const subCatItemThreadPage = ({ pageItem, thread }) => {
	return <ThreadPageLayout parentPage={pageItem} thread={thread} />;
};

export const getServerSideProps = async (context) => {
	const category = context.params.categoryId.replace(/-/g, " ");
	const subCategory = context.params.subCategoryId.replace(/-/g, " ");
	const subCategoryItem = context.params.subCategoryItemId.replace(/-/g, " ");
	const threadId = context.params.threadId.replace(/-/g, " ");

	//fetch thread
	const dbRef = ref(getDatabase());
	const snapshot = await get(
		child(
			dbRef,
			`threads/${category}/${subCategory}/${category}/${subCategoryItem}/${threadId}`
		)
	);
	const thread = snapshot.val();

	return {
		props: {
			thread,
			pageItem: subCategoryItem,
		},
	};
};

export default subCatItemThreadPage;
