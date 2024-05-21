import { shoe8 } from "../assets/images";
import Button from "../COMPONENT/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between item-center max-lg:flex-col gap-10 max-container w-full"
    >
      <div className="flex flex-1 flex-col pt-12">
        <h2 className="font-bold font-palanquin capitalize lg:max-w-lg text-4xl">
          we Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="view details" />
        </div>
      </div>
      <div className="cursor-pointer flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="Super shoes"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
