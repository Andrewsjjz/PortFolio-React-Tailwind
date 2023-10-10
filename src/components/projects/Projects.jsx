import React from 'react'

const Projects = ({ title }) => {
    return (
        <>
            <div class="rounded-lg bg-white overflow-hidden">

                <div className='w-80'>
                    <img
                        class="rounded-t-lg"
                        alt="" />
                </div>

                <div className='overflow-hidden'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.1,
                        }}
                        className="font-general-semibold 
							text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark 
							dark:text-primary-light uppercase mb-2 mt-2"
                    >
                        <FormattedMessage
                            id='project.title1'
                            defaultMessage='Client Manager'
                        />
                    </motion.p>
                </div>

                <div className='overflow-hidden'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.1,
                        }}
                        className="text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4"
                    >
                        <FormattedMessage
                            id='project.info1'
                            defaultMessage=
                            'Project developed using the languages and frameworks of HTML, CSS, React, and Vite, employing the useState and useEffect methods. With CRUD functions'
                        />
                    </motion.p>
                </div>

                <div className='flex items-center justify-center'>
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
        </>
    )
}

export default Projects
