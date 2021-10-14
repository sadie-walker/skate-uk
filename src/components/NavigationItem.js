import React, { useState } from "react";
import Link from "next/link";
import SubMenu from "./SubMenu";

const NavigationItem = (props) => {
	const [navLinkHover, setNavLinkHover] = useState(false);

	const locationLinks = [
		{
			title: "Skate Trails",
			href: "/skate-trails",
		},
		{
			title: "Skate Parks",
			href: "/skate-parks",
		},
		{
			title: "Skate Rink / Disco",
			href: "/skate-rinks",
		},
	];

	const groupsLinks = [
		{
			title: "Roller Derby",
			href: "/roller-derby",
		},
		{
			title: "Artistic",
			href: "/artistic",
		},
		{
			title: "Dance",
			href: "/dance",
		},
		{
			title: "Other",
			href: "/other",
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
