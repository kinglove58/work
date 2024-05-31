import SubscribeCard from "../COMPONENT/SubscribeCard";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center max-container"
    >
      <h3 className="font-bold font-palanquin text-4xl lg:max-w-md">
        Sign Up for <span className="text-coral-red">Update</span> & NewsLetter
      </h3>
      <div className="lg:max-w-[40%] w-full items-center">
        <SubscribeCard />
      </div>
    </section>
  );
};

export default Subscribe;
