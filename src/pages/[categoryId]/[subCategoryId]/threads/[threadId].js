import React from "react";
import { ref, get, getDatabase, child } from "firebase/database";
import ThreadPageLayout from "../../../../components/pageLayouts/ThreadPageLayout";

const subCatThreadPage = ({ subCategory, thread }) => {
	console.log(subCategory);
	return <ThreadPageLayout parentPage={subCategory} thread={thread} />;
};

export const getServerSideProps = async (context) => {
	const category = context.params.categoryId.replace(/-/g, " ");
	const subCategory = context.params.subCategoryId.replace(/-/g, " ");
	const threadId = context.params.threadId.replace(/-/g, " ");

	//fetch threads based on subCategoryId from database
	const dbRef = ref(getDatabase());
	const snapshot = await get(
		child(dbRef, `${category}/${subCategory}/threads`)
	);
	const data = snapshot.val();

	// select thread based on title
	const thread = data.find((item) => {
		return item.title.toLowerCase() === threadId;
	});

	return {
		props: {
			thread,
			subCategory,
		},
	};
};

export default subCatThreadPage;
