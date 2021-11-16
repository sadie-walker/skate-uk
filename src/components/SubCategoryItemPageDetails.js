import React from "react";

const SubCategoryItemPageDetails = ({ pageItem }) => {
	const details = Object.entries(pageItem);
	const list = details.map(([key, value], i) => {
		if (key !== "threads" && key !== "name" && key !== "img") {
			return (
				<li key={key + i}>
					<strong>{key}:</strong> {value}
				</li>
			);
		}
	});
	return <ul>{list}</ul>;
};

export default SubCategoryItemPageDetails;
