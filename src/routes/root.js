import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';

export default function Root() {
	return (
		<ThemeProvider>
			<main className='home-main'>
				<Navbar />
				<div className='container'>
					<Outlet />
					<Footer />
				</div>
			</main>
		</ThemeProvider>
	);
}
