import React, { useState } from "react";
import Link from "next/link";
import SubMenu from "./SubMenu";

const NavigationItem = (props) => {
	const [navLinkHover, setNavLinkHover] = useState(false);

	const locationLinks = [
		{
			title: "Skate Trails",
			href: "/locations/trails",
		},
		{
			title: "Skate Parks",
			href: "/locations/skate-parks",
		},
		{
			title: "Skate Rink / Disco",
			href: "/locations/skate-rinks",
		},
	];

	const groupsLinks = [
		{
			title: "Roller Derby",
			href: "/groups/roller-derby",
		},
		{
			title: "Artistic",
			href: "/groups/artistic",
		},
		{
			title: "Dance",
			href: "/groups/dance",
		},
		{
			title: "Other",
			href: "/groups/other",
		},
	];

	const subMenuOpenHandler = () => {
		setNavLinkHover(true);
	};

	const subMenuCloseHandler = () => {
		setNavLinkHover(false);
	};

	return (
		<li
			onMouseEnter={subMenuOpenHandler}
			onMouseLeave={subMenuCloseHandler}
		>
			<Link href={props.href}>{props.title}</Link>
			{navLinkHover && props.hasSubMenu ? (
				<SubMenu
					links={
						props.title === "Locations"
							? locationLinks
							: groupsLinks
					}
				/>
			) : null}
		</li>
	);
};

export default NavigationItem;
