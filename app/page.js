import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Code from "../public/image/code.png";
import Backend from "../public/image/backend2.png";
import Scrum from "../public/image/team-lead.png";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-200 mt-5 justify-center mx-auto max-w-screen-xl p-5 my-40">
      <div className="titles bg-gray-300 m-10 p-5 border border-gray-400 shadow-md rounded-lg text-center">
        <div className="homeTitle">
          <h1 className="text-xl font-semibold">Hola, Soy Adri</h1>
        </div>
        <div className="homeSubTitle">
          <h2 className="text-lg font-medium">Desarrolladora Web</h2>
          <h2 className="text-lg font-medium">¡Un gusto conocerte!</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <section className="homeSection bg-white m-10 p-5 border border-gray-200 shadow-md rounded-lg text-center">
          <Image
            src={Code}
            alt="front-end developer"
            width={100}
            height={100}
            className="rounded-full border border-orange-400 shadow-md inline-flex"
          ></Image>
          <div className="homeSectionTitle">
            <p className="text-base mt-5 mb-10 font-medium">
              Me gusta codificar cosas desde cero y disfruto dando vida a las
              ideas en el navegador.
            </p>
            <div className="homeSectionText">
              <h2 className="text-base mt-5 mb-10 font-medium">
                Desarrollo Frontend:
              </h2>
              <p>
                HTML, CSS, JavaScript <br /> React <br /> Next.js
                <br /> Typescript <br /> Tailwind <br /> Bootstrap <br /> GitHub
                <br /> Figma <br /> Adobe XD
              </p>
            </div>
          </div>
        </section>
        <section className="homeSection bg-white m-10 p-5 border border-gray-200 shadow-md rounded-lg text-center">
          <Image
            src={Backend}
            alt="front-end developer"
            width={100}
            height={100}
            className="rounded-full border border-orange-400 shadow-md inline-flex"
          ></Image>
          <div className="homeSectionTitle">
            <p className="text-base mt-5 mb-10 font-medium">
              Creando la magia detrás de cada funcionalidad, llevando tus ideas
              al servidor.
            </p>
            <div className="homeSectionText">
              <h2 className="text-base mt-5 mb-10 font-medium">
                Desarrollo Backend:
              </h2>
              <p>
                Node <br /> Express
              </p>
            </div>
            <div className="homeSectionText">
              <h2 className="text-base mt-5 mb-10 font-medium">
                Desarrollo móvil:
              </h2>
              <p>React Native</p>
            </div>
            <div className="homeSectionText">
              <h2 className="text-base mt-5 mb-10 font-medium">
                Base de Datos y Almacenamiento:
              </h2>
              <p>
                PostgreSQL <br /> Firebase <br /> MongoDB
              </p>
            </div>
          </div>
        </section>
        <section className="homeSection bg-white m-10 p-5 border border-gray-200 shadow-md rounded-lg text-center">
          <Image
            src={Scrum}
            alt="front-end developer"
            width={100}
            height={100}
            className="rounded-full border border-orange-400 shadow-md inline-flex"
          ></Image>
          <div className="homeSectionTitle">
            <p className="text-base mt-5 mb-10 font-medium">
              He tenido el honor de liderar y facilitar equipos de desarrollo en
              proyectos exitosos.
            </p>
            <div className="homeSectionText">
              <h2 className="text-base mt-5 mb-10 font-medium">Team Leader:</h2>
              <ul className="list-disc list-inside list-none text-left">
                <li>
                  <FaCheck className="inline-block mr-2 text-green-500 " />
                  Comunicación efectiva y habilidades de liderazgo.
                </li>
                <li>
                  <FaCheck className="inline-block mr-2 text-green-500" />
                  Fomentar la colaboración entre los miembros del equipo.
                </li>
                <li>
                  <FaCheck className="inline-block mr-2 text-green-500" />
                  Promover un ambiente de trabajo positivo.
                </li>
                <li>
                  <FaCheck className="inline-block mr-2 text-green-500" />
                  Garantizar que el equipo alcance sus objetivos con eficiencia.
                </li>
                <li>
                  <FaCheck className="inline-block mr-2 text-green-500" />
                  Resolución de problemas y toma de decisiones.
                </li>
                <li>
                  <FaCheck className="inline-block mr-2 text-green-500" />
                  Motivación y desarrollo del equipo.
                </li>
                <li>
                  <FaCheck className="inline-block mr-2 text-green-500" />
                  Facilitación de reuniones y ceremonias ágiles.
                </li>
                <li>
                  <FaCheck className="inline-block mr-2 text-green-500" />
                  Gestión de conflictos.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
