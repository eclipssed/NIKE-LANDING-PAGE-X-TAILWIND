import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap  items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          alt=""
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin capitalize lg:max-w-lg ">
          <span className="text-coral-red">Special </span>
          offer
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
        <div className="mt-11 flex gap-4">
          <Button label="Shop Now" imgURL={arrowRight} />
          <Button label="Learn More" bgColor="bg-white"
          borderColor='border-slate-gray'
          txtColor='text-slate-gray' />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
