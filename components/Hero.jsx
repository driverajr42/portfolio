import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import featureImg from '../public/featureProject.svg';

const Hero = ({ heading, message }) => {
	return (
		<div className="flex items-center justify-center h-screen bg-fix bg-center bg-cover hero-img">
			{/* Content */}
			<div className="p-5 text-center z-[2] mt-[-16rem] xs:mb-52 xs:p-12 md:p-56 lg:p-96 xl:p-[38rem]">
				<h2 className="text-5xl font-bold text-accentTwo xs:mb-4">{heading}</h2>
				<p className="py-5 text-xl text-accentTwo xs:mb-4">{message}</p>
				<button className="px-8 py-2  border-2 border-secondary rounded-full text-secondary">
					<Link href="/#portfolio">Explore Work</Link>
				</button>
			</div>

			{/* Featured Project */}
			<div className="absolute top-1/2 mt-16 xs:mt-0  ">
				<Image src={featureImg} alt="Something" />
			</div>
		</div>
	);
};

export default Hero;
