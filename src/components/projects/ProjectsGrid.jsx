import registroClientes from '../../images/Proyectos/registrodeclientes.png'
import controlGastos from '../../images/Proyectos/controlgastos.png'
import cotizador from '../../images/Proyectos/cotizador.png'
import clima from '../../images/Proyectos/clima.png'
import buscadorbebidas from '../../images/Proyectos/buscadorbebidas.png'
import ecommerce from '../../images/Proyectos/ecommerce.png'
import atenas from '../../images/Proyectos/Atenas.png'
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';



const ProjectsGrid = () => {


	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
				<FormattedMessage
					id='project.h1'
					defaultMessage='Portfolio of projects'
					/>
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<div
					className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
				</div>
			</div>

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 m-64 sm:gap-10">

<div class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
		<a href="#!">
			<img
				class="rounded-t-lg"
				src={registroClientes}
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
		id='project.title1'
		defaultMessage='Client Manager'
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
		id='project.info1'
		defaultMessage=
		'Project developed using the languages and frameworks of HTML, CSS, React, and Vite, employing the useState and useEffect methods. With CRUD functions'
		/>
	</motion.p>
  </div>

  <div className='flex items-center justify-center mb-10'>
  <a href='https://registo-clientes-react.netlify.app/' target="_blank" rel="noopener noreferrer" class="font-general-medium flex justify-center items-center px-6 py-3 
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

<div class="block rounded-lg bg-white mt-64 mb-64
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
		<a href="#!">
			<img
				class="rounded-t-lg"
				src={controlGastos}
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
	id='project.title2'
	defaultMessage='Budget planner'
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
	id='project.info2'
	defaultMessage='Project developed using HTML, CSS, React, and Vite technologies, employing the useState, useEffect, localStorage, and modal methods. With CRUD functions.'
	/>
	</motion.p>
  </div>

  <div className='flex items-center justify-center mb-10'>
  <a href='https://gastocontrolreact.netlify.app/' target="_blank" rel="noopener noreferrer" class="font-general-medium flex justify-center items-center px-6 py-3 
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
				src={cotizador}
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
	id='project.title3'
	defaultMessage='Car insurance estimator'
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
	id='project.info3'
	defaultMessage='Project developed using HTML, CSS, React, and Vite technologies, employing the useState, useEffect, useCallback, localStorage, and Context API methods.'
	/>
	</motion.p>
  </div>

  <div className='flex items-center justify-center mb-10'>
  <a href='https://cotizadorvehiculos-react.netlify.app/' target="_blank" rel="noopener noreferrer" class="font-general-medium flex justify-center items-center px-6 py-3 
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
		className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4"
	>
	<FormattedMessage
	id='project.info4'
	defaultMessage='Project developed using HTML, CSS, React, and Vite technologies, employing the useState, useEffect, useContext, Provider, and OpenWeatherMap API methods'
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
				src={buscadorbebidas}
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
	id='project.title5'
	defaultMessage='Drink finder'
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
	id='project.info5'
	defaultMessage='Project developed using HTML, CSS, React, Vite, and Bootstrap technologies, employing the useState, useEffect, Modal, and TheCocktailDB API methods.'
	/>
	</motion.p>
  </div>

  <div className='flex items-center justify-center mb-10'>
  <a href='https://buscador-bebidas-react-bootstrap.netlify.app/' target="_blank" rel="noopener noreferrer" class="font-general-medium flex justify-center items-center px-6 py-3 
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
	defaultMessage='Atenas Gym Club Next.JS 12'
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
		</section>
	);
};

export default ProjectsGrid;
