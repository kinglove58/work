const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="shadow-2xl flex-1 rounded-[20px] w-full sm:w-[350px] sm:min-w-[350px] px-10 py-16 ">
      <div className="flex justify-center bg-coral-red rounded-full h-11 w-11 items-center">
        <img src={imgURL} alt={label} />
      </div>
      <h3 className="font-bold my-2 font-palanquin text-2xl leading-normal">
        {label}
      </h3>
      <p className="text-slate-gray break-words font-montserrat text-lg leading-normal">{subtext} </p>
    </div>
  );
};

export default ServiceCard;
