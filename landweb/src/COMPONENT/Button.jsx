const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 border text-lg px-7 py-4 leading-none font-montserrat bg-coral-red rounded-full text-white border-coral-red ">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
