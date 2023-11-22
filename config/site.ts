export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Wittawat's Profile",
	description: "Welcome to Wittawat's Profile, I'm full-stack developer specializing in React, Node, and Typescript",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/pingkungjaza",
		linkedin: "https://www.linkedin.com/in/wittawat-phumthong",
		discord: "https://discord.gg/BS9x5cnYjd",
		email: "ph.wittawat.p@gmail.com",
		phone: '(+66)0899798788'
	},
};
