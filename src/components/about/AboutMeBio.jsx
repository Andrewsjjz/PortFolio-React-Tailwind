
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import { FormattedMessage } from 'react-intl';
import yo from '../../images/myself.jpg'


const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={yo} className="rounded-lg w-96" alt="" />
			</div>
			
			<div className="font-general-regular w-full sm:w-3/4 text-justify">

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me1'
						defaultMessage="I'm Andres Jimenez, a versatile professional with a unique combination of skills as a Computer Engineer, UX/UI Designer and Full Stack React Developer. My diverse approach allows me to create end-to-end, user-focused technology solutions. Let me introduce you to what I can contribute."
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me2'
						defaultMessage='As a Computer Engineer, I have a solid understanding of technological fundamentals. I can tackle complex technical challenges, design efficient systems, and apply sound development methodologies. My engineering background allows me to make informed decisions and build solutions that are sound from a technical perspective.'
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me3'
						defaultMessage='As a UX/UI Designer, my focus is on user experiences. I work to understand the needs and desires of users and translate them into attractive and easy-to-use interfaces. From wireframing to visual design, my goal is to ensure every interaction is intuitive and satisfying.'
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me4'
						defaultMessage='Passionate Full Stack developer in React, with a solid experience in building innovative and efficient web applications using modern technologies. Familiarity with various databases, including SQL and NoSQL, as well as the ability to design and optimize queries for optimal performance. Experience in the design and development of robust and scalable APIs using technologies such as Node.js. Ability to translate designs and concepts into high-quality components that provide an exceptional user experience. Deep knowledge of HTML, CSS and JavaScript to achieve a seamless integration between frontend and backend.'
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me5'
						defaultMessage='My work philosophy is:'
						/>
					</p>

					<div className='flex-col'>
					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me6'
						defaultMessage='Solid technological solutions that align with the needs of users and business objectives.'
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me7'
						defaultMessage='Attractive and functional interface designs that enhance the user experience.'
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me8'
						defaultMessage='Comprehensive development of web applications that encompass all aspects, from functionality to design.'
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me9'
						defaultMessage='Ability to communicate technical ideas and design concepts clearly and effectively.'
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me10'
						defaultMessage='Focus on collaboration and the creation of innovative solutions.'
						/>
					</p>

					</div>
					

			</div>
		</div>
	);
};

export default AboutMeBio;
