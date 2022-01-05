import React, { useState, useEffect } from "react";
import SubCategoryPageLayout from "../../../components/pageLayouts/SubCategoryPageLayout";
import firebaseApp from "../../../../firebase/firebase";
import { getDatabase, ref, get, child } from "firebase/database";
import { useRouter } from "next/router";

const subCategoryPage = ({ category, fields, subCategory, threads }) => {
	const router = useRouter();

	const refreshPage = () => {
		router.replace(router.asPath);
	};

	return (
		<SubCategoryPageLayout
			category={category}
			fields={fields}
			subCategory={subCategory}
			refreshPage={refreshPage}
			threads={threads}
		/>
	);
};

export const getStaticPaths = async () => {
	const dbRef = ref(getDatabase(firebaseApp));

	let paths = [];
	await get(child(dbRef, "/categories/")).then((res) => {
		const data = res.val();
		// get categories
		for (const x in data) {
			// get subCategories
			for (const y in data[x].types) {
				paths.push({
					params: {
						categoryId: x,
						subCategoryId: data[x].types[y].title
							.toLowerCase()
							.replace(/ /g, "-"),
					},
				});
			}
		}
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const category = context.params.categoryId;
	const subCategory = context.params.subCategoryId.replace(/-/g, " ");

	const dbRef = ref(getDatabase(firebaseApp));

	// get subCategories data from database
	const subCatSnapshot = await get(
		child(dbRef, `/categories/${category}/types/${subCategory}`)
	);
	const subCatData = subCatSnapshot.val();

	// get category fields
	const fieldsSnapshot = await get(
		child(dbRef, `/categories/${category}/categoryFields`)
	);
	const fieldsData = fieldsSnapshot.val();
	let fields;
	if (!subCatData.subCategoryFields) {
		fields = fieldsData;
	} else {
		fields = [...fieldsData, ...subCatData.subCategoryFields];
	}

	// get subCategory threads
	const threadsSnapshot = await get(
		child(dbRef, `/threads/${category}/${subCategory}/threads`)
	);
	let threads = threadsSnapshot.val();

	return {
		props: {
			category,
			fields,
			subCategory: subCatData,
			threads: threads,
		},
		revalidate: 60,
	};
};

export default subCategoryPage;
