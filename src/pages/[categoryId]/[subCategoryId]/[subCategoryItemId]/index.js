import React from "react";
import { useRouter } from "next/router";
import { getDatabase, ref, get, child } from "firebase/database";
import SubCategoryItemPageLayout from "../../../../components/pageLayouts/SubCategoryItemPageLayout";

const subCategoryItemPage = ({ pageItem, fields, threads }) => {
	const router = useRouter();

	const refreshPage = () => {
		router.replace(router.asPath);
	};

	return (
		<SubCategoryItemPageLayout
			pageItem={pageItem}
			fields={fields}
			threads={threads}
			refreshPage={refreshPage}
		/>
	);
};

export const getServerSideProps = async (context) => {
	const category = context.params.categoryId;
	const subCategory = context.params.subCategoryId.replace(/-/g, " ");
	const subCategoryItem = context.params.subCategoryItemId.replace(/-/g, " ");

	// fetch subCategory
	const dbRef = ref(getDatabase());
	const subCatSnapshot = await get(
		child(dbRef, `/categories/${category}/types/${subCategory}`)
	);
	const subCat = subCatSnapshot.val();

	// set pageItem
	const pageItem = subCat[category][subCategoryItem];

	// fetch categoryFields
	const fieldsSnapshot = await get(
		child(dbRef, `/categories/${category}/categoryFields`)
	);
	const categoryFields = fieldsSnapshot.val();

	// fetch threads
	const threadSnapshot = await get(
		child(
			dbRef,
			`/threads/${category}/${subCategory}/${category}/${subCategoryItem}`
		)
	);
	const threads = threadSnapshot.val();

	return {
		props: {
			pageItem: subCat[category][subCategoryItem],
			fields: [...categoryFields, ...subCat.subCategoryFields],
			threads,
		},
	};
};

export default subCategoryItemPage;
