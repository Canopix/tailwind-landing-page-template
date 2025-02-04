import React, { useState } from "react";
import Modal from "../utils/Modal";
import firstImage from "../images/first-image.jpeg";
import patricio from "../images/patriciorey.jpeg";

const Videos = () => {
  const [FirstVideoModalOpen, setFirstVideoModalOpen] = useState(false);
  const [SecondVideoModalOpen, setSecondVideoModalOpen] = useState(false);
  const [ThirdVideoModalOpen, setThirdVideoModalOpen] = useState(false);

  return (
    <>
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
              <stop stopColor="#14C1CD" offset="0%" />
              <stop stopColor="#39DAC9" offset="77.402%" />
              <stop stopColor="#5BEDC6" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="455" cy="493" r="204" />
            <circle cx="155" cy="243" r="64" />
          </g>
        </svg>
      </div>
      <div className="py-16">
        <h1 className="text-8xl mb-8 text-center uppercase">Multimedia</h1>
        <div
          className="relative flex justify-center mb-16"
          data-aos="zoom-y-out"
          data-aos-delay="450"
        >
          <div className="flex flex-col justify-center">
            <img
              className="mx-auto"
              src={firstImage}
              width="768"
              height="432"
              alt="Hero"
            />
          </div>
          <button
            className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setFirstVideoModalOpen(true);
            }}
            aria-controls="modal"
          >
            <svg
              className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
              <path d="M10 17l6-5-6-5z" />
            </svg>
            <span className="ml-3">Ver todo el video (2 min)</span>
          </button>
        </div>

        <div
          className="mx-auto relative flex flex-col md:flex-row justify-center mb-8"
          data-aos="zoom-y-out"
          data-aos-delay="450"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center mr-2">
              <img
                className="mx-auto w-full md:w-full"
                src={firstImage}
                alt="Hero"
              />
            </div>
            <button
              className="w-min top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSecondVideoModalOpen(true);
              }}
              aria-controls="modal"
            >
              <svg
                className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                <path d="M10 17l6-5-6-5z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center mr-2">
              <img
                className="mx-auto w-full md:w-full"
                src={patricio}
                alt="Hero"
              />
            </div>
            <button
              className="w-min top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setThirdVideoModalOpen(true);
              }}
              aria-controls="modal"
            >
              <svg
                className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                <path d="M10 17l6-5-6-5z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal */}
        <Modal
          id="modal"
          ariaLabel="modal-headline"
          show={FirstVideoModalOpen}
          handleClose={() => setFirstVideoModalOpen(false)}
        >
          <div className="relative pb-9/16">
            <iframe
              className="absolute w-full h-full"
              src="https://player.vimeo.com/video/659066649?h=9119436226"
              title="Video"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
        <Modal
          id="modal"
          ariaLabel="modal-headline"
          show={SecondVideoModalOpen}
          handleClose={() => setSecondVideoModalOpen(false)}
        >
          <div className="relative pb-9/16">
            <iframe
              className="absolute w-full h-full"
              src="https://player.vimeo.com/video/659068315?h=226bc453ec"
              title="Video"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
        <Modal
          id="modal"
          ariaLabel="modal-headline"
          show={ThirdVideoModalOpen}
          handleClose={() => setThirdVideoModalOpen(false)}
        >
          <div className="relative pb-9/16">
            <iframe
              className="absolute w-full h-full"
              src="https://www.youtube.com/embed/Jd2yL9Vzu1I"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Videos;
