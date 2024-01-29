import React from "react";

const ShoeCard = ({ shoe, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== shoe.bigShoe) {
      changeBigShoeImg(shoe.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        (bigShoeImg === shoe.bigShoe)
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      
    >
      <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
      onClick={handleClick}>
        <img
          src={shoe.thumbnail}
          alt="shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
