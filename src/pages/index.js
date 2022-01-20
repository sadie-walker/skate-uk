import Directions from "../components/Directions";
import styles from "../styles/HomePage.module.css";

export default function Home() {
	const directions = {
		locations: {
			title: "Find somewhere to skate",
			href: "/locations",
			bgImg: "https://firebasestorage.googleapis.com/v0/b/skate-uk.appspot.com/o/images%2Flocations%2Flocation.jpg?alt=media&token=bfb7695e-8d18-409b-ba92-86cf09573126",
		},
		groups: {
			title: "Find people to skate with",
			href: "/groups",
			bgImg: "https://firebasestorage.googleapis.com/v0/b/skate-uk.appspot.com/o/images%2Fgroups%2Fgroup-skating.jpg?alt=media&token=2c031253-2100-4a53-94fa-0f3d7d498181",
		},
		equipment: {
			title: "Get equipment recommendations",
			href: "/equipment",
			bgImg: "https://firebasestorage.googleapis.com/v0/b/skate-uk.appspot.com/o/images%2Fequipment%2Fequipment.jpg?alt=media&token=9427eb68-b40b-401e-916c-ec1bb3e39aed",
		},
	};

	return (
		<section className={styles.home}>
			<h1>
				<span>Hi Skaters!</span> <br /> Welcome to the home of UK
				skating.
			</h1>
			<p>
				Whether your looking for a new place to skate, people to skate
				with or equipment recommendations - we have it all.
			</p>
			<Directions directions={directions} classes="half-page" />
		</section>
	);
}
