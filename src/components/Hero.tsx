import Image from "next/image";
import React from "react";
import { Button } from ".";

const Hero = () => {
  return (
    <section className="hero" id="hero" >
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title md:text-[55px] leading-[60px]">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle ">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <Button>Explore Car</Button>
      </div>
      <div className="hero__image-container pt-[60px!important]">
        <div className="hero__image flex items-center justify-end">
          <Image src="/hero.png" alt="hero" fill className="object-contain w-[100%] max-w-[700px]"  />
        </div>

        <div className="hero___image-overlay xl:top-[-4rem!important]" />
      </div>
    </section>
  );
};

export default Hero;
