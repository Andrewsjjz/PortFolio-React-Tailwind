import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import ws from '../../images/whatsapp-logo_icon-icons.com_57054.svg'
import { useState } from 'react';
import Button from '../reusable/Button';
import HireMeModal from '../HireMeModal';

const contacts = [
	{
		id: 1,
		name: 'Zulia, Venezuela',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'Andresjimenez884@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+58-412-1635088',
		icon: <FiPhone/>,
	},
];

const ContactDetails = () => {

	const [showModal, setShowModal] = useState(false);

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>

						</li>
					))}

					{/* <div className='flex justify-center items-center'>
						<button onClick={showHireMeModal}>
						<img src={ws} alt="" className='w-10' />
						</button>
					</div>

					<div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
				{showModal ? showHireMeModal : null}
			</div> */}

				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
