
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
						defaultMessage='My name is Andres Jimenez, and I am a Computer Engineer from Rafael Belloso Chacin Private University (URBE).'
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me2'
						defaultMessage='As a Full Stack developer, I have a strong knowledge of both client-side and server-side development. My main focus is on web application development using React, combined with my skills in HTML, CSS, and JavaScript.'
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me3'
						defaultMessage='My experience includes building responsive and highly interactive web applications. I am passionate about creating intuitive and visually appealing user interfaces that provide a seamless experience to end-users. In addition to my front-end experience, I also have knowledge in developing RESTful APIs using frameworks like Express.js and Node.js, and experience in working with databases such as MongoDB, PostgreSQL, and XAMPP.'
						/>
					</p>

					<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
						<FormattedMessage
						id='info.me4'
						defaultMessage='In addition to my technical skills, I am a communicative and collaborative individual, which allows me to work efficiently with designers, fellow developers, and stakeholders to achieve project goals. I am always open to learning from others and contributing my ideas to find innovative solutions.'
						/>
					</p>

			</div>
		</div>
	);
};

export default AboutMeBio;
