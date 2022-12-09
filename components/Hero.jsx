import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import featureImg from '../public/featureProject.svg';

const Hero = ({ heading, message }) => {
	return (
		<div className="flex items-center justify-center h-screen bg-fix bg-center bg-cover hero-img">
			<div className="p-5 text-center z-[2] mt-[-20rem] md:p-56 lg:p-96 xl:p-[38rem]">
				<h2 className="text-5xl font-bold text-accentTwo">{heading}</h2>
				<p className="py-5 text-xl text-accentTwo">{message}</p>
				<button className="px-8 py-2  border-2 border-secondary rounded-full text-secondary">
					<Link href="/#portfolio">Explore Work</Link>
				</button>
			</div>

			{/* Featured Project */}
			<div className="absolute bottom-48">
				<Image src={featureImg} alt="Something" width={800} height={800} />
			</div>
		</div>
	);
};

export default Hero;
