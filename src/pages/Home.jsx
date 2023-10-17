import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';

import myway from '../images/Proyectos/Myway.png'
import clima from '../images/Proyectos/clima.png'
import atenas from '../images/Proyectos/Atenas.png'


import Button from '../components/reusable/Button';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 m-64 sm:gap-10 text-justify">

			<div class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
		<a href="#!">
			<img
				class="rounded-t-lg"
				src={myway}
				alt="" /> </a>

  <div class="mt-16">
  	<motion.p
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{
			ease: 'easeInOut',
			duration: 0.9,
			delay: 0.1,
		}}
		className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
	>
	<FormattedMessage
		id='project.title7'
		defaultMessage='My Way Restaurant'
		/>
	</motion.p>
	
	<motion.p
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{
			ease: 'easeInOut',
			duration: 0.9,
			delay: 0.1,
		}}
		className=" text-base lg:text-base xl:text-base sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4 text-justify"
	>
		<FormattedMessage
		id='project.info7'
		className="text-justify"
		defaultMessage=
		'Project developed with the React, Tailwind and Next.js 12 languages, using a cloud database that is AWS and MySql and an ORM that would be Prisma. It has a client side where orders are placed and an admin panel where the kitchen side would be to confirm orders.'
		/>
	</motion.p>
  </div>

  <div className='flex items-center justify-center mb-10'>
  <a href='https://restaurante-next.vercel.app/' target="_blank" rel="noopener noreferrer" class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
   		<FormattedMessage
		id='project.button'
		defaultMessage=
		'Visit'
		/>
  </a>
</div>
</div>

<div class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
		<a href="#!">
			<img
				class="rounded-t-lg"
				src={clima}
				alt="" /> </a>

  <div class="">
  	<motion.p
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{
			ease: 'easeInOut',
			duration: 0.9,
			delay: 0.1,
		}}
		className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
	>
	<FormattedMessage
	id='project.title4'
	defaultMessage='Check weather'
	/>
	</motion.p>
	
	<motion.p
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{
			ease: 'easeInOut',
			duration: 0.9,
			delay: 0.1,
		}}
		className="text-base lg:text-base xl:text-base sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4 text-justify"
	>
	<FormattedMessage
	id='project.info4'
	className="text-justify"
	defaultMessage='Project developed using HTML, CSS, React, and Vite technologies, employing the useState, useEffect, useContext, Provider, and OpenWeatherMap API methods. Where the country and town that are registered in the options are consulted'
	/>
	</motion.p>
  </div>

  <div className='flex items-center justify-center mb-10'>
  <a href='https://climaapireact.netlify.app/' target="_blank" rel="noopener noreferrer" class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
      		<FormattedMessage
		id='project.button'
		defaultMessage=
		'Visit'
		/>
  </a>
</div>

</div>

<div class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
		<a href="#!">
			<img
				class="rounded-t-lg"
				src={atenas}
				alt="" /> </a>

  <div class="">
  	<motion.p
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{
			ease: 'easeInOut',
			duration: 0.9,
			delay: 0.1,
		}}
		className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
	>
	<FormattedMessage
	id='project.title6'
	defaultMessage='Atenas Gym Club'
	/>
	</motion.p>
	
	<motion.p
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{
			ease: 'easeInOut',
			duration: 0.9,
			delay: 0.1,
		}}
		className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4"
	>
	<FormattedMessage
	id='project.info6'
	defaultMessage='Project developed using HTML, CSS, React, Tailwind, and Next.js 12 technologies, leveraging the full power of Next.js 12, creating our own API with Strapi and using PostgreSQL database.'
	/>
	</motion.p>
  </div>
  
<div className='flex items-center justify-center mb-10'>
<a href='https://atenas-gym-club.netlify.app/' target="_blank" rel="noopener noreferrer" class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
      		<FormattedMessage
		id='project.button'
		defaultMessage=
		'Visit'
		/>
  </a>
</div>
</div>

</div>


			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="Mas proyectos"
				>
					<Button title="Mas proyectos" />
				</Link>
			</div>

			{/* <div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="Mas proyectos"
				>
					<Button title="Mas proyectos" />
				</Link>
			</div> */}
		</div>
	);
};

export default Home;
