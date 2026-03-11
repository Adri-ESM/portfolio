import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import Code from '@/public/image/code.png'
import Backend from '@/public/image/backend2.png'
import Scrum from '@/public/image/team-lead.png'

export default function Home () {
  return (
    <div className='flex flex-col bg-gray-200 mt-5 justify-center mx-auto max-w-screen-xl p-5 my-40'>
      {/* Sección de introducción */}
      <div className='titles bg-gray-300 m-10 p-5 border border-gray-400 shadow-md rounded-lg text-center'>
        <h1 className='text-xl font-semibold'>Hola, Soy Adri</h1>
        <h2 className='text-lg font-medium'>Desarrolladora Web</h2>
        <h2 className='text-lg font-medium'>¡Un gusto conocerte!</h2>
      </div>

      {/* Sección de habilidades */}
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {/* Desarrollo Frontend */}
        <section className='homeSection bg-white m-10 p-5 border border-gray-200 shadow-md rounded-lg text-center'>
          <Image
            src={Code}
            alt='Desarrollo Frontend'
            width={100}
            height={100}
            className='rounded-full border border-orange-400 shadow-md'
          />
          <h2 className='text-base mt-5 mb-10 font-medium'>
            Desarrollo Frontend:
          </h2>
          <p className='text-gray-700'>
            HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind,
            Bootstrap, GitHub, Figma, Adobe XD
          </p>
        </section>

        {/* Desarrollo Backend y Bases de Datos */}
        <section className='homeSection bg-white m-10 p-5 border border-gray-200 shadow-md rounded-lg text-center'>
          <Image
            src={Backend}
            alt='Desarrollo Backend'
            width={100}
            height={100}
            className='rounded-full border border-orange-400 shadow-md'
          />
          <h2 className='text-base mt-5 mb-10 font-medium'>
            Desarrollo Backend:
          </h2>
          <p className='text-gray-700'>Node.js, Express</p>

          <h2 className='text-base mt-5 mb-10 font-medium'>
            Desarrollo móvil:
          </h2>
          <p className='text-gray-700'>React Native</p>

          <h2 className='text-base mt-5 mb-10 font-medium'>Base de Datos:</h2>
          <p className='text-gray-700'>PostgreSQL, Firebase, MongoDB</p>
        </section>

        {/* Habilidades de Team Leader */}
        <section className='homeSection bg-white m-10 p-5 border border-gray-200 shadow-md rounded-lg text-center'>
          <Image
            src={Scrum}
            alt='Liderazgo de equipo'
            width={100}
            height={100}
            className='rounded-full border border-orange-400 shadow-md'
          />
          <h2 className='text-base mt-5 mb-10 font-medium'>Team Leader:</h2>
          <ul className='list-disc pl-5 text-gray-700 text-left'>
            {[
              'Comunicación efectiva y habilidades de liderazgo.',
              'Fomentar la colaboración entre los miembros del equipo.',
              'Promover un ambiente de trabajo positivo.',
              'Garantizar que el equipo alcance sus objetivos con eficiencia.',
              'Resolución de problemas y toma de decisiones.',
              'Motivación y desarrollo del equipo.',
              'Facilitación de reuniones y ceremonias ágiles.',
              'Gestión de conflictos.'
            ].map((item, index) => (
              <li key={index} className='flex items-center'>
                <FaCheck className='mr-2 text-green-500' />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
