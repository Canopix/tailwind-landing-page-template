import React, { useState } from "react";
import logo from "../images/logo.png";

function HeroHome() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 pt-32 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="455" cy="243" r="94" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div>
        {/* Hero content */}
        <div>
          {/* Section header */}
          <div className="mx-auto max-w-6xl text-center pb-12 md:pb-16">
            <img className="m-auto" width="40%" src={logo} alt="company logo" />
            {/* <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make your website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span></h1> */}
            <div className="max-w-3xl mx-auto">
              <p
                className="md:text-2xl text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Tok´n Show construye una nueva relación con los artistas,
                creadores de esos instantes únicos que queremos recordar, que
                dicen algo de nosotros y que nos gustaría tener. Gracias a
                nuevas tecnologías como Blockchain y contratos inteligentes nos
                permite comprar elementos únicos digitales. El futuro de la
                industria, hoy.
              </p>
              {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div> */}
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
