import CloseIcon from '@mui/icons-material/Close';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import styles from '../styles'
const Navbar = ({ logoName }) => {
	const [nav, setNav] = useState(false);

	 // These states are to change the background and text colors when user scrolls down
	 const [color, setColor] = useState('transparent')
	 const [textColor, setTextColor] = useState('white')

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(()=>{
        // If user scrolled down the window passed a certain point the background and text color of navbar will change using the following effect
        const colorChange = () => {
            if(window.scrollY >= 90 ) {
                setColor('#fff')
                setTextColor('#000')
            } else {
                setColor('transparent')
                setTextColor('#fff')
            } // Else if user is not scrolled down a certain piont than effect will return back to its orignal state
        }
        // Telling the window to listen to the scroll
        window.addEventListener('scroll', colorChange)
    }, [])

	return (
		<div style={{backgroundColor:`${color}` }} className={`${styles.navbar}}`}>
			{/* Company Logo */}
			<div className={styles.logoBox}>
				<div className={styles.companyLogo}>
					<CodeOffIcon className={styles.logoIcon} />
					<Link href="/">
						<h1 style={{color:`${textColor}` }} className={styles.companyName}>
							{logoName}
						</h1>
					</Link>
				</div>

				<ul style={{Color:`${textColor}` }} className={styles.navBoxMd}>
					<li className={styles.navItemsMd}>
						<Link href="/">Home</Link>
					</li>
					<li className={styles.navItemsMd}>
						<Link href="/#gallery">Gallery</Link>
					</li>
					<li className={styles.navItemsMd}>
						<Link href="/portfolio">Work</Link>
					</li>
					<li className={styles.navItemsMd}>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<div onClick={handleNav} className={styles.mobileMenuBox}>
					{/* If navbar is open show the close icon. Else show the menu icon */}
					{nav ? (
						<CloseIcon  className={styles.closeIcon} style={{color:`${textColor}` }} />
					) : (
						<MenuIcon className={styles.menuIcon} style={{color:`${textColor}` }}/>
					)}
				</div>

				{/* Mobile Menu */}
				{/* If nav is not showing display the first styles. If it is open the show the second */}
				<div
					className={
						nav
							? styles.mobileNav
							: styles.openNav
					}
				>
					<ul>
						<li className={styles.mobileNavItems}>
							<Link href="/">Home</Link>
						</li>
						<li className={styles.mobileNavItems}>
							<Link href="/#gallery">Gallery</Link>
						</li>
						<li className={styles.mobileNavItems}>
							<Link href="/portfolio">Work</Link>
						</li>
						<li className={styles.mobileNavItems}>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
