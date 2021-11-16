import React from "react";
import { ref, get, getDatabase, child } from "firebase/database";
import ThreadPageLayout from "../../../../../components/pageLayouts/ThreadPageLayout";

const subCatItemThreadPage = ({ pageItem, thread }) => {
	console.log(pageItem);
	console.log(thread);
	return <ThreadPageLayout parentPage={pageItem} thread={thread} />;
};

export const getServerSideProps = async (context) => {
	const category = context.params.categoryId.replace(/-/g, " ");
	const subCategory = context.params.subCategoryId.replace(/-/g, " ");
	const subCategoryItem = context.params.subCategoryItemId.replace(/-/g, " ");
	const threadId = context.params.threadId.replace(/-/g, " ");

	//fetch subCategory based on subCategoryId from database
	const dbRef = ref(getDatabase());
	const snapshot = await get(
		child(dbRef, `${category}/${subCategory}/${category}`)
	);
	const data = snapshot.val();

	// select subCategoryItem based on subCategoryItemId
	const pageItem = data.find((item) => {
		return item.name.toLowerCase() === subCategoryItem;
	});

	// // select thread based on title
	const thread = pageItem.threads.find((item) => {
		return item.title.toLowerCase() === threadId;
	});

	return {
		props: {
			thread,
			pageItem: pageItem.name,
		},
	};
};

export default subCatItemThreadPage;
