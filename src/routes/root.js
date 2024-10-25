import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Root() {
	return (
		<main className='home-main'>
			<Navbar />
			<div className='container'>
				<Outlet />
				<Footer />
			</div>
		</main>
	);
}
