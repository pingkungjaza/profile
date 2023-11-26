"use client"

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
	DiscordIcon,
	LinkedinIcon,
	EmailIcon
} from "@/components/icons";
import { PhoneIcon } from '@heroicons/react/24/solid'

import AvatarProfile from "./avatarProfile";
import BackgroundMusic from "./backgroundMusic";
import { useState } from "react";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<NextUINavbar
			maxWidth="xl"
			position="sticky"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit items-center">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<AvatarProfile />
						<p className="font-bold text-inherit">
							WITTAWAT
						</p>
					</NextLink>
					<BackgroundMusic />
				</NavbarBrand>
				<ul className="hidden sm:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="flex gap-2">
					<Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
						<LinkedinIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={`mailto:${siteConfig.links.email}`} aria-label="Phone">
						<EmailIcon className="text-default-500" />
					</Link>
					<Link isExternal href={`tel:${siteConfig.links.phone}`} aria-label="Phone">
						<PhoneIcon className="h-6 w-6 text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.label}
							</NextLink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
