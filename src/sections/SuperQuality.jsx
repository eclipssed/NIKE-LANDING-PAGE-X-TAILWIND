import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin capitalize lg:max-w-lg ">
          We Provide You <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Where Style Meets Comfort. Step into the future of footwear with our
          cutting-edge designs crafted for supreme performance and unmatched
          elegance. Immerse yourself in unparalleled comfort, durability, and
          style, meticulously engineered for the modern trendsetter.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Elevate your every step with Nike's Super Quality Shoes – where
          innovation and fashion seamlessly merge.
        </p>
        <div className="mt-11">
        <Button label={" View Details"} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img className="object-contain" src={shoe8} width={570} height={522} alt=" shoe8" />
      </div>
    </section>
  );
};

export default SuperQuality;
