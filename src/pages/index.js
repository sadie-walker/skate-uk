import HomeDirections from "../components/HomeDirections";
import styles from "../styles/HomePage.module.css";

export default function Home() {
	return (
		<section className={styles.home}>
			<h1>Hi Skaters! Welcome to the home of UK skating.</h1>
			<p>
				Whether your looking for a new place to skate, people to skate
				with or equipment recommendations - we have it all.
			</p>
			<HomeDirections />
		</section>
	);
}
