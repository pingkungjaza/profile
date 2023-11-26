import { title, subtitle } from "@/components/primitives";
import { Avatar } from "@nextui-org/react";
import WorkSection from "@/components/workSection";
import TechStackSection from "@/components/techStackSection";
import ContactSection from "@/components/contactSection";

export default function Home() {
	return (
		<>
			<section id='home' className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 h-[100vh]">
				<div className="inline-block max-w-lg text-center justify-center">
					<div className="flex justify-center">
						<Avatar
							isBordered
							color="secondary"
							className="h-32 w-32 mb-8"
							src="/images/profile.jpeg"
						/>
					</div>
					<h1 className={title()}>
						Hello,&nbsp;
					</h1>
					<h1 className={title({ color: "violet" })}>
						I'm Wittawat Phumthong&nbsp;
					</h1>
					<br />
					<h2 className={subtitle({ class: "mt-2" })}>
						I'm a full-stack developer specializing in React, Node, and Typescript
					</h2>
				</div>
			</section>
			<WorkSection />
			<TechStackSection />
			<ContactSection />
		</>
	);
}
