import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsMouse } from "react-icons/bs";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import { SiApplearcade } from "react-icons/si";
import Typed from "typed.js"; // Ajout de l'import pour Typed.js

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Récupérez les trois images d'arcade à partir de l'Ipsum (ou de toute autre source)
    const arcadeImages = [
      "/imgArcade/image1.jpg", // Image 1
      "/imgArcade/image2.jpg", // Image 2
      "/imgArcade/image3.jpg", // Image 3
    ];

    setSlides(arcadeImages);
  }, []);

  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Arcade", "Arcade"],
      typeSpeed: 40,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []); // [] signifie que le useEffect s'exécutera uniquement après le montage initial

  useEffect(() => {
    // Changez la diapositive toutes les quelques secondes (par exemple, toutes les 7 secondes)
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div
      className="relative bg-no-repeat bg-cover h-[450px] md:h-[600px] lg:h-[680px] xl:h-[800px]"
      style={{ backgroundImage: `url('${slides[currentSlide]}')` }}
    >
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="flex items-center mr-0 ml-0 h-[550px] md:h-[600px] xl:h-[800px]">
          <div className="relative text-center z-10 pr-0 pl-0 mx-auto sm:w-1/2 md:w-2/3 xl:mx-auto">
            <h1 className="ftn-size uppercase text-white font-[600] text-center">
              Neo<span className="text-[#EBA24E] multiple-text"></span>
            </h1>
            <p className="text-white text-[22px] uppercase">
              Plongez dans la nostalgie, jouez à l'arcade chez vous
            </p>
            <Link href="#sectionCard">
              <div className="flex justify-center items-center">
                <BsMouse className="text-white text-4xl hover:text-[#EBA24E] absolute -bottom-28 cursor-pointer animate-bounce md:-bottom-52 xl:left-1/2 xl:text-5xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
