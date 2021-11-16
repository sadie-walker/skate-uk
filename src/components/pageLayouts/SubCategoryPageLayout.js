import React from "react";
import ThreadList from "../ThreadList";
import styles from "../../styles/SubCategoryPageLayout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TopicList from "../TopicList";

const SubCategoryPageLayout = ({ topic, subCategory, subCategoryItems }) => {
	return (
		<section className={styles.subpage}>
			<h1>{subCategory.title}</h1>
			<p>{subCategory.lead}</p>
			<div className={styles.topic}>
				<h2>{topic}</h2>
				<div className={styles.actions}>
					<div className={styles.input}>
						<div>
							<FontAwesomeIcon icon={faSearch} />
						</div>
						<input type="text" />
					</div>
					<button>Add {topic}</button>
				</div>
				<TopicList list={subCategoryItems} />
			</div>
			<div className={styles.threads}>
				<h2>Discussion</h2>
				<ThreadList threads={subCategory.threads} />
			</div>
		</section>
	);
};

export default SubCategoryPageLayout;
