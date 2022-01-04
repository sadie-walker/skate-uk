import Directions from "../components/Directions";
import styles from "../styles/HomePage.module.css";

export default function Home() {
	const directions = [
		{
			title: "Find somewhere to skate",
			href: "/locations",
			bgImg: "location.jpg",
		},
		{
			title: "Find people to skate with",
			href: "/groups",
			bgImg: "group-skating.jpg",
		},
		{
			title: "Get equipment recommendations",
			href: "/equipment",
			bgImg: "equipment.jpg",
		},
	];

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
			<Directions
				directions={directions}
				width="repeat(auto-fill, minmax(295px, 1fr))"
			/>
		</section>
	);
}
