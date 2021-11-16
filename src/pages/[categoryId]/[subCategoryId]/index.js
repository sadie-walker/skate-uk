import React from "react";
import SubCategoryPageLayout from "../../../components/pageLayouts/SubCategoryPageLayout";

import firebaseApp from "../../../../firebase/firebase";
import { getDatabase, ref, get, child } from "firebase/database";

const subCategoryPage = ({ category, subCategory }) => {
	return (
		<SubCategoryPageLayout
			topic={category}
			subCategory={subCategory}
			subCategoryItems={subCategory[category]}
		/>
	);
};

export const getServerSideProps = async (context) => {
	const category = context.params.categoryId;
	const subCategory = context.params.subCategoryId.replace(/-/g, " ");

	// get subCategory data from database
	const dbRef = ref(getDatabase(firebaseApp));
	const snapshot = await get(child(dbRef, `/${category}/${subCategory}`));
	const data = snapshot.val();

	return {
		props: {
			category,
			subCategory: data,
		},
	};
};

export default subCategoryPage;
