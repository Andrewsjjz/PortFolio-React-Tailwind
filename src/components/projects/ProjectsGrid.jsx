import registroClientes from "../../images/Proyectos/registrodeclientes.png";
import controlGastos from "../../images/Proyectos/controlgastos.png";
import cotizador from "../../images/Proyectos/cotizador.png";
import clima from "../../images/Proyectos/clima.png";
import buscadorbebidas from "../../images/Proyectos/buscadorbebidas.png";
import myway from "../../images/Proyectos/Myway.png";
import atenas from "../../images/Proyectos/Atenas.png";
import mern from "../../images/Proyectos/MERN.jpg";
import trade from "../../images/Proyectos/Index Desktop.png";

import arco from "../../images/Proyectos/Al Arco.png";
import atenasgym from "../../images/Proyectos/Atenas Gym.png";

import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import { useContext } from "react";
import Projects from "./Projects";

import ProyectosContext from "../../context/ProyectosContext";

const ProjectsGrid = () => {
  const { proyectos, setProyectos } = useContext(ProyectosContext);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          <FormattedMessage
            id="project.h1"
            defaultMessage="Portfolio of projects"
          />
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 m-64 sm:gap-10 ">
        <div class="rounded-lg bg-white overflow-hidden">
          <div className="w-80">
            <img class="rounded-t-lg" src={registroClientes} alt="" />
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold 
							text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark 
							dark:text-primary-light uppercase mb-2 mt-2"
            >
              <FormattedMessage
                id="project.title1"
                defaultMessage="Client Manager"
              />
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4"
            >
              <FormattedMessage
                id="project.info1"
                defaultMessage="Project developed using the languages and frameworks of HTML, CSS, React, and Vite, employing the useState and useEffect methods. With CRUD functions"
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="https://registo-clientes-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>

        <div class="rounded-lg bg-white overflow-hidden">
          <div className="flex w-80">
            <img class="rounded-t-lg" src={controlGastos} alt="" />
          </div>

          <div class="overflow-hidden">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-2 mt-2"
            >
              <FormattedMessage
                id="project.title2"
                defaultMessage="Budget planner"
              />
            </motion.p>
          </div>

          <div class="">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4"
            >
              <FormattedMessage
                id="project.info2"
                defaultMessage="Project developed using HTML, CSS, React, and Vite technologies, employing the useState, useEffect, localStorage, and modal methods. With CRUD functions."
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="https://gastocontrolreact.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>

        <div class="block rounded-lg bg-white overflow-hidden">
          <a href="#!">
            <img class="rounded-t-lg" src={cotizador} alt="" />{" "}
          </a>

          <div class="">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
            >
              <FormattedMessage
                id="project.title3"
                defaultMessage="Car insurance estimator"
              />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="text-dark dark:text-primary-light mb-4 mt-4 text-justify"
            >
              <FormattedMessage
                id="project.info3"
                defaultMessage="Project developed using HTML, CSS, React, and Vite technologies, employing the useState, useEffect, useCallback, localStorage, and Context API methods."
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <a
              href="https://cotizadorvehiculos-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>

        <div
          class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <a href="#!">
            <img class="rounded-t-lg" src={clima} alt="" />{" "}
          </a>

          <div class="">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
            >
              <FormattedMessage
                id="project.title4"
                defaultMessage="Check weather"
              />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4"
            >
              <FormattedMessage
                id="project.info4"
                defaultMessage="Project developed using HTML, CSS, React, and Vite technologies, employing the useState, useEffect, useContext, Provider, and OpenWeatherMap API methods"
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <a
              href="https://climaapireact.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>

        <div
          class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <a href="#!">
            <img class="rounded-t-lg" src={buscadorbebidas} alt="" />{" "}
          </a>

          <div class="">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
            >
              <FormattedMessage
                id="project.title5"
                defaultMessage="Drink finder"
              />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4"
            >
              <FormattedMessage
                id="project.info5"
                defaultMessage="Project developed using HTML, CSS, React, Vite, and Bootstrap technologies, employing the useState, useEffect, Modal, and TheCocktailDB API methods."
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <a
              href="https://buscador-bebidas-react-bootstrap.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>

        <div
          class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <a href="#!">
            <img class="rounded-t-lg" src={atenas} alt="" />{" "}
          </a>

          <div class="">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
            >
              <FormattedMessage
                id="project.title6"
                defaultMessage="Atenas Gym Club"
              />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4"
            >
              <FormattedMessage
                id="project.info6"
                defaultMessage="Project developed using HTML, CSS, React, Tailwind, and Next.js 12 technologies, leveraging the full power of Next.js 12, creating our own API with Strapi and using PostgreSQL database."
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <a
              href="https://atenas-gym-club.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>

        <div
          class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <a href="#!">
            <img class="rounded-t-lg" src={myway} alt="" />{" "}
          </a>

          <div class="mt-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
            >
              <FormattedMessage
                id="project.title7"
                defaultMessage="My Way Restaurant"
              />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4"
            >
              <FormattedMessage
                id="project.info7"
                defaultMessage="Project developed with the React, Tailwind and Next.js 12 languages, using a cloud database that is AWS and MySql and an ORM that would be Prisma. It has a client side where orders are placed and an admin panel where the kitchen side would be to confirm orders. It can be consulted by placing in the address bar /admin"
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <a
              href="https://restaurante-next.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>

        <div
          class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <div className="items-center justify-center flex">
            <a href="#!">
              <img class="rounded-t-lg w-52 h-56 mb-2 " src={mern} alt="" />{" "}
            </a>
          </div>

          <div class="mt-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
            >
              <FormattedMessage id="project.title10" defaultMessage="UpTask" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4"
            >
              <FormattedMessage
                id="project.info10"
                defaultMessage="MERN type project, it is an application where its function is project management, allowing CRUD functions to be carried out as well as adding collaborators, with a section that allows the registration of other people. Using MongoDB as a database, for the Node JS and Express JS backend. Like React and Tailwind frontend. In addition to implementing Socket io and Sendgrid"
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <a
              href="https://mern-project-frontend-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center pt-10 mb-12">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          <FormattedMessage
            id="project.h2"
            defaultMessage="UI Project Portfolio"
          />
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 m-64 sm:gap-10">
        <div
          class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <a href="#!">
            <img class="rounded-t-lg" src={arco} alt="" />{" "}
          </a>

          <div class="mt-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
            >
              <FormattedMessage id="project.title8" defaultMessage="Al Arco" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4"
            >
              <FormattedMessage
                id="project.info8"
                defaultMessage="Design of a dashboard to provide detailed information on the latest soccer matches. Created with the Figma tool"
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <a
              href="https://www.behance.net/gallery/180390379/Al-Arco"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>

        <div
          class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <a href="#!">
            <img class="rounded-t-lg" src={atenasgym} alt="" />{" "}
          </a>

          <div class="mt-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-8"
            >
              <FormattedMessage
                id="project.title9"
                defaultMessage="Atenas Gym-Club"
              />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4"
            >
              <FormattedMessage
                id="project.info9"
                defaultMessage="Mobile application design for general information about a gym. Created with the Figma tool"
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <a
              href="https://www.behance.net/gallery/180391275/Atenas-Gym-Club"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>

        <div
          class="block rounded-lg bg-white 
	shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <div className="w-full mt-12">
            <img class="rounded-t-lg w-full" src={trade} alt="" />{" "}
          </div>

          <div class="mt-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-xl lg:text-xl xl:text-3xl text-center sm:text-left text-ternary-dark
		 dark:text-primary-light uppercase mb-4 mt-4"
            >
              <FormattedMessage
                id="project.title11"
                defaultMessage="Trade Bank"
              />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className=" text-base lg:text-base xl:text-base text-center sm:text-left text-dark
		dark:text-primary-light mb-4 mt-4"
            >
              <FormattedMessage
                id="project.info11"
                defaultMessage="UI design of a bank that allows the purchase and sale of crypto as well as owning the currency. Web design and mobile design. Figma Design Tool"
              />
            </motion.p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <a
              href="https://www.behance.net/gallery/181376653/Trade-Bank"
              target="_blank"
              rel="noopener noreferrer"
              class="font-general-medium flex justify-center items-center px-6 py-3 
  rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 
  focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            >
              <FormattedMessage id="project.button" defaultMessage="Visit" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
