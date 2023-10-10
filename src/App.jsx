import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';


import { TranslateProvider } from './context/TranslateProvider';
import { ProyectosProvider } from './context/ProyectosContext';


const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));


function App() {



	return (
		<AnimatePresence>
			<ProyectosProvider>

				<TranslateProvider>


					<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
						<Router>
							<ScrollToTop />
							<AppHeader />
							<Suspense fallback={""}>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="projects" element={<Projects />} />
									<Route
										path="projects/single-project"
										element={<ProjectSingle />}
									/>

									<Route path="about" element={<About />} />
									<Route path="contact" element={<Contact />} />
								</Routes>
							</Suspense>
							<AppFooter />
						</Router>
						<UseScrollToTop />
					</div>
				</TranslateProvider>
			</ProyectosProvider>
		</AnimatePresence>
	);
}

export default App;