import React from "react";

const SubCategoryItemPageDetails = ({ pageItem, fields }) => {
	const list = fields.map((field, i) => {
		if (field === "Image") {
			return;
		}

		return (
			<li key={field + i}>
				<strong>{field}:</strong>
				{pageItem[field.toLowerCase()]}
			</li>
		);
	});
	return <ul>{list}</ul>;
};

export default SubCategoryItemPageDetails;
