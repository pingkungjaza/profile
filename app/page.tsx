'use client'
import { title, subtitle } from "@/components/primitives";
import { Avatar } from "@nextui-org/react";
import WorkSection from "@/components/workSection";
import TechStackSection from "@/components/techStackSection";
import ContactSection from "@/components/contactSection";
import TextSpan from "@/components/textSpan";

export default function Home() {
	const helloWord = 'Hello, '.split('')
	const iamWord = 'I\'m Wittawat Phumthong '.split('')
	const descWord = 'I\'m a full-stack developer specializing in React, Node, and Typescript'.split('')

	return (
		<>
			<section id='home' className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 min-h-[100vh]">
				<div className="inline-block max-w-lg text-center justify-center">
					<div className="flex justify-center">
						<Avatar
							isBordered
							color="secondary"
							className="h-48 w-48 mb-8 brightness-1.05"
							src="/images/profile.jpeg"
						/>
					</div>
					<h1 className={title({ size: 'lg', class: 'flex justify-center' })}>
						{helloWord.map((letter, index: number) =>
							<TextSpan key={index} className="text-[28px] md:text-[48px]">
								{letter === ' ' ? "\u00A0" : letter}
							</TextSpan>
						)}

						{iamWord.map((letter, index: number) =>
							<TextSpan key={index} className={`text-purple-600 text-[28px] md:text-[48px]`}>
								{letter === ' ' ? "\u00A0" : letter}
							</TextSpan>
						)}
					</h1>
					<h2 className={subtitle({ class: "mt-2 text-[24px] md:text-[28px]" })}>
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
