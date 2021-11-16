import React from "react";
import SubCategoryItemPageLayout from "../../../../components/pageLayouts/SubCategoryItemPageLayout";

import firebaseApp from "../../../../../firebase/firebase";
import { getDatabase, ref, get, child } from "firebase/database";
import {
	getStorage,
	ref as storageRef,
	getDownloadURL,
} from "firebase/storage";

const subCategoryItemPage = ({ pageItem, url }) => {
	return <SubCategoryItemPageLayout pageItem={pageItem} logo={url} />;
};

export const getServerSideProps = async (context) => {
	//fetch groups based on groupsId from database
	const category = context.params.categoryId;
	const subCategory = context.params.subCategoryId.replace(/-/g, " ");
	const subCategoryItem = context.params.subCategoryItemId.replace(/-/g, " ");

	// get list of subCategoryItems
	const dbRef = ref(getDatabase());
	const snapshot = await get(
		child(dbRef, `${category}/${subCategory}/${category}`)
	);
	const data = snapshot.val();

	//select subCategoryItem based on subCategoryItemId
	const pageItem = data.find((item) => {
		return item.name.toLowerCase() === subCategoryItem;
	});

	// fetch logo image from storage
	const storageReference = storageRef(getStorage(firebaseApp));
	const logo = storageRef(storageReference, `images/${pageItem.img}`);
	let logoUrl = await getDownloadURL(logo);

	return {
		props: {
			url: logoUrl,
			pageItem,
		},
	};
};

export default subCategoryItemPage;
