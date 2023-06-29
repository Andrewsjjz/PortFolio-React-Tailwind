// import sendCostumEmail from "../../helpers/sendCustomEmail";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { motion } from 'framer-motion';


const ContactForm = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [alerta, setAlerta] = useState(false)


  // function submitHandler (e) {
  // 	e.preventDefault() 
  // 	const name = e.target.email.name
  // 	const email = e.target.email.value
  // 	const subject = e.target.subject.value
  // 	const message = e.target.message.value

  // 	sendCostumEmail(name, email, subject, message)
  // }

  const form = useRef();

  const handleValidacion = (e) => {
    e.preventDefault()

    if ([nombre, email, mensaje].includes('')) {
      setAlerta(true)
      return

    }
    setAlerta(false)

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Correo electronico enviado',
      showConfirmButton: false,
      timer: 2000
    })

    //Configuracion emailjs
    emailjs.sendForm('service_lfkg04b', 'template_fbidrte', form.current, 'DYHWm86ono2z1qLTW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setEmail('')
    setMensaje('')
    setNombre('')

  }


  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={handleValidacion}
          ref={form} >
            
            <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-xl lg:text-xl xl:text-xl text-center sm:text-center text-ternary-dark
        dark:text-primary-light uppercase mb-4 mt-4"
        >
          Send Email
        </motion.p>
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              {alerta && <div className="bg-red-700 text-center text-white font-bold rounded-lg mb-5 p-2 uppercase">
                <h2>Todos los campos deben estar llenos</h2>
              </div>}


              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.9,
                  delay: 0.1,
                }}
                className="font-general-semibold text-base lg:text-base xl:text-base text-center sm:text-left text-ternary-dark
		          dark:text-primary-light uppercase mb-4 mt-4"
              >
                Full Name
              </motion.p>


            </label>
            <input
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              type="text"
              name="user_name"
              id="name"
              placeholder="Your full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.9,
                  delay: 0.1,
                }}
                className="font-general-semibold text-base lg:text-base xl:text-base text-center sm:text-left text-ternary-dark
		          dark:text-primary-light uppercase mb-4 mt-4"
              >
              Email Address
              </motion.p>
            </label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              name="user_email"
              id="email"
              placeholder="Your Email Address"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

            />
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.9,
                  delay: 0.1,
                }}
                className="font-general-semibold text-base lg:text-base xl:text-base text-center sm:text-left text-ternary-dark
		          dark:text-primary-light uppercase mb-4 mt-4"
              >
              Message
              </motion.p>
            </label>
            <textarea
              value={mensaje}
              onChange={e => setMensaje(e.target.value)}
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <input
              value='Enviar'
              type='submit'
              class="font-general-medium flex justify-center items-center px-6 py-3 
		rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
		focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
