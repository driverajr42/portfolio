import '../styles/globals.css';

// All components that we want to use on every page should be imported on app.js file
// import { Navbar } from '../components'

function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* <Navbar /> */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
