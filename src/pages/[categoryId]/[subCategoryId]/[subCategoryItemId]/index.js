import React from "react";
import SubCategoryItemPageLayout from "../../../../components/pageLayouts/SubCategoryItemPageLayout";

import firebaseApp from "../../../../../firebase/firebase";
import { getDatabase, ref, get, child } from "firebase/database";
import {
	getStorage,
	ref as storageRef,
	getDownloadURL,
} from "firebase/storage";

const subCategoryItemPage = ({ pageItem, url, fields, threads }) => {
	return (
		<SubCategoryItemPageLayout
			pageItem={pageItem}
			logo={url}
			fields={fields}
			threads={threads}
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

	// fetch logo image from storage
	const storageReference = storageRef(getStorage(firebaseApp));
	let logo;
	if (pageItem.img) {
		logo = storageRef(storageReference, `images/${pageItem.img}`);
	} else {
		logo = storageRef(storageReference, `images/defaultLocation.jpg`);
	}
	const logoUrl = await getDownloadURL(logo);

	// fetch threads
	const threadSnapshot = await get(
		child(
			dbRef,
			`/threads/${category}/${subCategory}/${category}/${subCategoryItem}`
		)
	);
	const threads = Object.values(threadSnapshot.val());

	return {
		props: {
			url: logoUrl,
			pageItem: subCat[category][subCategoryItem],
			fields: [...categoryFields, ...subCat.subCategoryFields],
			threads,
		},
	};
};

export default subCategoryItemPage;
