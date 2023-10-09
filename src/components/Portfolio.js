/** @format */

import React from "react";
import Anime, { anime } from "react-anime";
import PortfolioItem from "./helpers/PortfolioItem";

const Portfolio = ({ refs }) => {
	return (
		<div id="portfolio" className="flex flex-col w-full py-5" ref={refs}>
			<h1 className="text-primaryTxt text-7xl font-medium text-center mb-20">
				Portfolio
			</h1>
			<div className="flex justify-center items-center flex-wrap">
				<Anime
					translateX={anime.stagger(50, { from: "start" })}
					translateY={anime.stagger(50, { from: "center" })}
				>
					<PortfolioItem
						heading="WEBSITE"
						heading2="A Food Recipe Website"
						type="web"
						title="FlavorFusion"
						description={
							"A food recipe website, completely built with react js and tailwind css, the recipes a been generate from Edamam.com with the help of an API."
						}
						link="https://65014b5d40687c3a0f9be9ed--leafy-marshmallow-7c49a9.netlify.app/"
					/>
					<PortfolioItem
						heading="WEBSITE"
						heading2="A Personal Portfolio"
						type="port"
						title="PERSONAL PORTFOLIO"
						description={
							"Personal Portfolio built with react js and backed with Google's Firebase as serverless backend.."
						}
						link="https://6505f198ef6fec3729b2c611--shiny-rolypoly-d09bdd.netlify.app/"
					/>
					<PortfolioItem
						heading="WEBSITE"
						heading2="Web Development Project"
						type="web"
						title="WEB DEVELOPMENT"
						description={
							"First Web Development freelance project. A Simple dynamic website."
						}
						link="https://playful-cannoli-4ea6e7.netlify.app"
					/>
					<PortfolioItem
						heading="WEBSITE"
						heading2="E-commerce"
						type="port"
						title="E-commerce"
						description={
							"Built with react js"
						}
						link="https://splendid-sopapillas-a96bc1.netlify.app/"
					/>
					<PortfolioItem
						heading="WEBSITE"
						heading2="my-tune"
						type="port"
						title="my-turn"
						description={
							"Built with html and css"
						}
						link="https://inspiring-zabaione-5c1000.netlify.app/"
					/>
					<PortfolioItem
						heading="WEBSITE UI"
						heading2="Parallax"
						type="port"
						title="my-Parallax"
						description={
							"This UI was built with html and css"
						}
						link="https://regal-cocada-df515c.netlify.app/"
					/>
					
					
					
				</Anime>
			</div>
		</div>
	);
};

export default Portfolio;
