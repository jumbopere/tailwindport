import React from 'react';
import myImg from '../images/hero.jpeg';
import Section from './Section';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
    <div className="w-full md:w-6/12">
        <Section>About Me</Section>
        <p className="text-md text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            veniam dolor consectetur pariatur explicabo, iure nulla. Dolor
            debitis, natus cum ad, fugiat excepturi minima culpa atque modi
            accusantium vel voluptatem?
        </p>
        <a
            href="mailto:jumboperebara0@gmail.com"
            className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
        >
            jumboperebara0@gmail.com
        </a>
    </div>

    <img
        src={myImg}
        alt="Arfan"
        className="w-full md:w-6/12 rounded-lg object-cover"
    />
</div>
  )
}

export default About