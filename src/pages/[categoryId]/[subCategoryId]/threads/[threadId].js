import React from "react";
import { ref, get, getDatabase, child } from "firebase/database";
import ThreadPageLayout from "../../../../components/pageLayouts/ThreadPageLayout";

const subCatThreadPage = ({ subCategory, thread }) => {
	return <ThreadPageLayout parentPage={subCategory} thread={thread} />;
};

export const getServerSideProps = async (context) => {
	const category = context.params.categoryId.replace(/-/g, " ");
	const subCategory = context.params.subCategoryId.replace(/-/g, " ");
	const thread = context.params.threadId.replace(/-/g, " ");

	//fetch threads based on subCategoryId from database
	const dbRef = ref(getDatabase());
	const snapshot = await get(
		child(dbRef, `/threads/${category}/${subCategory}/threads/${thread}`)
	);
	const data = snapshot.val();

	return {
		props: {
			thread: data,
			subCategory,
		},
	};
};

export default subCatThreadPage;
