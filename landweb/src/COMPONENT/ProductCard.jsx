import { star } from "../assets/icons";

const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px] " />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.2)</p>
      </div>
      
        <h3 className="font-semibold mt-2 text-2xl leading-normal font-palanquin">{name}</h3>
        <p className="text-coral-red mt-2 font-semibold font-montserrat text-2xl leading-normal">{price} </p>
      
    </div>
  );
};

export default ProductCard;
