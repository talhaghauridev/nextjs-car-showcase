"use client";
import { CarCardProps } from "@/types";
import Image from "next/image";
import React, { FC, useState } from "react";
import Button from "./Button";
import { calculateCarRent } from "@/utils";
import CarDetials from "./CarDetials";
const CarCard: FC<CarCardProps> = (car) => {
  const { cityMPG, drive, make, model, mpg, transmission, year } = car;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const carRent = calculateCarRent(cityMPG, year);

  return (
    <>
      <div className="car-card group">
        <div className="car-card__content">
          <h2 className="car-card__content-title">
            {make} {model}
          </h2>
        </div>

        <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
          <span className="self-start text-[14px] leading-[17px] font-semibold">
            $
          </span>
          {carRent}
          <span className="self-end text-[14px] leading-[17px] font-medium">
            /day
          </span>
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            // src={generateCarImageUrl(car)}
            src={"/hero.png"}
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-grey">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/steering-wheel.svg"
                width={20}
                height={20}
                alt="steering wheel"
              />
              <p className="text-[14px] leading-[17px]">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="car-card__icon">
              <Image src="/tire.svg" width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{drive?.toUpperCase()}</p>
            </div>
            <div className="car-card__icon">
              <Image src="/gas.svg" width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{mpg} MPG</p>
            </div>
          </div>

          <div className="car-card__btn-container">
            <Button
              className="gap-2 max-w-full "
              onClick={() => setIsOpen((pve) => !pve)}
            >
              View More
              <Image
                src={"/right-arrow.svg"}
                alt="Card right icon"
                width={30}
                height={100}
                className="car-card__btn-image"
              />
            </Button>
          </div>
        </div>

        <CarDetials
          isOpen={isOpen}
          closeModal={() => setIsOpen((pve) => !pve)}
          car={car}
        />
      </div>
    </>
  );
};

export default CarCard;
