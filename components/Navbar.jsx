import CloseIcon from '@mui/icons-material/Close';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = ({ logoName }) => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
			{/* Company Logo */}
			<div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-mainTxt">
				<div className="flex items-center relative right-4">
					<CodeOffIcon className="w-10 h-10 text-secondary ml-4" />
					<Link href="/">
						<h1 className="font-bold text-accentTwo text-2xl ml-2">
							{logoName}
						</h1>
					</Link>
				</div>

				<ul className="hidden sm:flex text-xl ">
					<li className="p-4 text-accentTwo hover:text-secondary">
						<Link href="/">Home</Link>
					</li>
					<li className="p-4 text-accentTwo hover:text-secondary">
						<Link href="/#gallery">Gallery</Link>
					</li>
					<li className="p-4 text-accentTwo hover:text-secondary">
						<Link href="/portfolio">Work</Link>
					</li>
					<li className="p-4 text-accentTwo hover:text-secondary">
						<Link href="/contact">Contact</Link>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<div onClick={handleNav} className="block sm:hidden z-10">
					{/* If navbar is open show the close icon. Else show the menu icon */}
					{nav ? (
						<CloseIcon className="w-8 h-8 text-secondary" />
					) : (
						<MenuIcon className="w-8 h-8 text-secondary" />
					)}
				</div>

				{/* Mobile Menu */}
				{/* If nav is not showing display the first styles. If it is open the show the second */}
				<div
					className={
						nav
							? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary text-center ease-in duration-300'
							: 'sm:hidden absolute top-[100vh] left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary text-centerhover:text-secondary ease-in duration-300'
					}
				>
					<ul>
						<li className="p-4 text-4xl text-secondary hover:text-gray-500">
							<Link href="/">Home</Link>
						</li>
						<li className="p-4 text-4xl text-secondary hover:text-gray-500">
							<Link href="/#gallery">Gallery</Link>
						</li>
						<li className="p-4 text-4xl text-secondary hover:text-gray-500">
							<Link href="/portfolio">Work</Link>
						</li>
						<li className="p-4 text-4xl text-secondary hover:text-gray-500">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
