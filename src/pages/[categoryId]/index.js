import React from "react";
import CategoryPageLayout from "../../components/pageLayouts/CategoryPageLayout";
import { ref, get, child, getDatabase } from "firebase/database";
import firebaseApp from "../../../firebase/firebase";

const categoryPage = ({ category, subcategories }) => {
	return (
		<CategoryPageLayout
			title={
				category === "groups"
					? "Find a group to skate with"
					: "Find somewhere to skate"
			}
			lead={
				category === "groups"
					? "There are lots of super fun skate groups to join in the UK - why not try something new!"
					: "There are lots of super fun places to skate in the UK - why not try somewhere new!"
			}
			subcategories={subcategories}
			category={category}
		/>
	);
};

export const getStaticPaths = async () => {
	const dbRef = ref(getDatabase(firebaseApp));
	const snapshot = await get(child(dbRef, `/`));
	const data = snapshot.val();

	const arr = Object.entries(data);
	const paths = arr.map(([key]) => {
		return {
			params: {
				categoryId: key.toString(),
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
	const snapshot = await get(child(dbRef, `${category}`));
	const data = snapshot.val();

	return {
		props: {
			category,
			subcategories: data,
		},
		revalidate: 10000,
	};
};

// export const getServerSideProps = async (context) => {
// 	const category = context.params.categoryId.replace(/-/g, " ");
// 	const dbRef = ref(getDatabase(firebaseApp));

// 	const snapshot = await get(child(dbRef, `${category}`));
// 	const data = snapshot.val();

// 	const snapshot2 = await get(child(dbRef, `/`));
// 	const data2 = snapshot2.val();
// 	const arr = Object.entries(data2);
// 	const paths = arr.map(([key]) => {
// 		return {
// 			params: {
// 				catergoryId: key.toString().replace(/ /g, "-"),
// 			},
// 		};
// 	});

// 	return {
// 		props: {
// 			data,
// 			data2,
// 			paths,
// 		},
// 	};
// };

export default categoryPage;
