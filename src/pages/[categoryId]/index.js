import React from "react";
import CategoryPageLayout from "../../components/pageLayouts/CategoryPageLayout";
import { ref, get, child, getDatabase } from "firebase/database";
import firebaseApp from "../../../firebase/firebase";

const categoryPage = ({ category }) => {
	return <CategoryPageLayout category={category} />;
};

export const getStaticPaths = async () => {
	const dbRef = ref(getDatabase(firebaseApp));
	const snapshot = await get(child(dbRef, `/categories/`));
	const data = snapshot.val();

	const arr = Object.keys(data);
	const paths = arr.map((item) => {
		return {
			params: {
				categoryId: item.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const category = context.params.categoryId.replace(/-/g, " ");

	const dbRef = ref(getDatabase());
	const snapshot = await get(child(dbRef, `/categories/${category}`));
	const data = snapshot.val();

	return {
		props: {
			category: data,
		},
		revalidate: 10000,
	};
};

export default categoryPage;
