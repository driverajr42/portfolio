const styles = {
    //General

//Navbar
navbar: 'fixed left-0 top-0 w-full z-10 ease-in duration-300',
logoBox: 'max-w-[1240px] m-auto flex justify-between items-center p-4 text-mainTxt',
companyLogo: 'flex items-center relative right-4',
logoIcon: 'w-10 h-10 text-secondary ml-4',
companyName: 'font-bold text-accentTwo text-2xl ml-2',
mobileMenuBox:'block sm:hidden z-10',
closeIcon: 'w-8 h-8 text-secondary',
menuIcon: 'w-8 h-8 text-secondary',
mobileNav: 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary text-center ease-in duration-300', //When menu is not enabled these styles will be displayed
openNav: 'sm:hidden absolute top-[100vh] left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary text-centerhover:text-secondary ease-in duration-300', // When menu is enabledt these styles will be applied
mobileNavItems: 'p-4 text-4xl text-secondary hover:text-gray-500',

//---Medium Devices ---//
navBoxMd:'hidden sm:flex text-xl',
navItemsMd: 'p-4 text-accentTwo hover:text-secondary'
//Hero

}
export default styles