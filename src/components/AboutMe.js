/** @format */

import React, { useEffect } from "react";
import Anime, { anime } from "react-anime";
import { Award, Folder, Users } from "react-feather";
import aboutme from "../assests/aboutme.svg";

const AboutMe = ({ refs }) => {
	return (
		<div
			id="aboutme"
			className="flex flex-col xl:flex-row items-center justify-around mt-[2.5in] py-5"
			ref={refs}
		>
			<div className="xl:w-[35%] flex flex-col gap-5">
				<h1 className="text-primaryTxt text-5xl	xl:text-7xl font-medium text-center mb-10">
					About Me
				</h1>
				<div className="flex flex-col xl:flex-row xl:justify-between justify-center items-center mb-10">
					<div className="w-[13rem] h-[13rem] bg-secondaryBg rounded-3xl flex flex-col items-center justify-between p-5 m-2">
						<h3 className="text-primaryTxt">EXPERIENCE</h3>
						<Anime
							scale={{
								value: 1.1,
								easing: "linear",
								duration: anime.random(500, 1000),
							}}
							loop={true}
							direction={"alternate"}
							delay={300}
						>
							<Award color="#06d6a0" size={42} />
						</Anime>
						<h3 className="text-[#9ca3af]">14 Months</h3>
					</div>

					<div className="w-[13rem] h-[13rem] bg-secondaryBg rounded-3xl flex flex-col items-center justify-between p-5 m-2">
						<h3 className="text-primaryTxt">PROJECTS</h3>

						<Anime
							scale={{
								value: 1.1,
								easing: "linear",
								duration: anime.random(500, 1000),
							}}
							loop={true}
							direction={"alternate"}
							delay={300}
						>
							<Folder color="#06d6a0" size={42} />
						</Anime>
						<h3 className="text-[#9ca3af]">10+ Active</h3>
					</div>
					<div className="w-[13rem] h-[13rem] bg-secondaryBg rounded-3xl flex flex-col items-center justify-between p-5 m-2">
						<h3 className="text-primaryTxt">CLIENTS</h3>
						<Anime
							scale={{
								value: 1.1,
								easing: "linear",
								duration: anime.random(500, 1000),
							}}
							loop={true}
							direction={"alternate"}
							delay={300}
						>
							<Users color="#06d6a0" size={42} />
						</Anime>
						<h3 className="text-[#9ca3af]"></h3>
					</div>
				</div>
				<div className="flex flex-col gap-5 justify-center">
					<p className="text-primaryTxt font-normal leading-7 tracking-wide text-[.9rem]">
						Here's a gist, I'm{" "}
						<em className="text-[#f77f00] font-medium">
							a Programmer by Profession, a Designer Choice, and a Cook by
							Interest
						</em>
						. I'm excited to introduce myself as a recent graduate 
						of the Codetrain Africa software engineer cohort program. 
						I'm passionate about technology and have honed my skills in software 
						development through this intensive and comprehensive program..
					</p>
					<p className="text-primaryTxt font-normal leading-7 tracking-wide text-[.9rem]">
						I've worked on projects throughout my time in Codetrain solo and with other developers, which includes Web
						Development, Graphics Designing and UI/UX projects.
					</p>
					<p className="text-primaryTxt font-normal leading-7 tracking-wide text-[.9rem]">
						I believe in qualitative work rather than quantitative and believe
						that my skills will support your brand and/or you to succeed in your
						business and objectives.
						I am confident that my education at Codetrain Africa has prepared me 
						well to excel in the field of software engineering. 
						I am eager to apply my knowledge and skills to real-world projects 
						and contribute to innovative solutions in the tech industry.
					</p>
					<p className="text-primaryTxt font-normal leading-7 tracking-wide text-[.9rem]">
						Feel free to get in touch.
					</p>
					<a
						href="#contact"
						className="text-primaryTxt border-2 border-[#f1faee] w-fit px-5 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] mt-2"
					>
						Let's Talk
					</a>
				</div>
			</div>
			<div className="xl:w-[500px]">
				<img src={aboutme} alt="About Pushkar" />
			</div>
		</div>
	);
};

export default AboutMe;
