import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../COMPONENT/Button";
import { shoes, statistics } from "../constant";
import ShoeCard from "../COMPONENT/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="flex w-full gap-10 justify-center min-h-screen max-container flex-col xl:flex-row"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-monserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 text-8xl font-bold max-sm:leading-[82px] font-palanquin max-sm:text-[72px] py-10">
          {" "}
          <span className="xl:whitespace-nowrap xl:bg-white relative z-10 pr-10">
            The New Arrival
          </span>{" "}
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="sm:max-w-sm text-slate-gray mt-8 mb-14 font-montserrat text-lg leading-8 ">
          Discover stylish Nike arrivals quality comfort and innovation for you
          active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((start) => (
            <div key={start.label} className="">
              <p className="font-bold font-palanquin text-4xl ">
                {start.value}
              </p>
              <p className="text-slate-gray leading-8 font-monserrat ">
                {start.label}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          height={610}
          width={500}
          src={bigShoeImg}
          alt="shoe collection"
          className="object-contain relative z-10"
        />

        <div className="flex absolute -bottom-[-5%] sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
