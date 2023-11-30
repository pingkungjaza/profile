export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Wittawat's Profile",
	description: "Hello, I'm Wittawat Phumthong, I'm a full-stack developer specializing in React, Node, and Typescript",
	navItems: [
		{
			label: "Home",
			href: "/#home",
		},
		{
			label: "Works",
			href: "/#works",
		},
		{
			label: "Tech stacks",
			href: "/#tech-stack",
		},
		{
			label: "Contact",
			href: "/#contact",
		}
	],
	links: {
		github: { url: "https://github.com/pingkungjaza", label: 'GitHub' },
		linkedin: { url: "https://www.linkedin.com/in/wittawat-phumthong", label: 'LinkedIn' },
		discord: { url: "https://discord.gg/BS9x5cnYjd", label: 'Discord' },
		email: { url: "ph.wittawat.p@gmail.com", label: 'Email' },
		phone: { url: '+66899798788', label: 'Phone' },
		resume: { url: 'https://drive.google.com/file/d/11gqerY5RWlphGlsSjDJtfdAlNcLBjTi0/view?usp=sharing', label: 'Resume' }
	},
};
