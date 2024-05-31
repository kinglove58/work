import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../COMPONENT/Button";

const SpecialOffer = () => {
  return (
    <section className="max-container flex items-center justify-between max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="capitalize font-bold font-palanquin text-4xl text-coral-red">
          special <span className="text-black">offer</span>
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>{" "}
        <div className="flex flex-wrap mt-8 gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backGroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
