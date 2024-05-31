import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center flex-col items-center mt-10 text-center">
      <img
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
        className="rounded-full object-contain w-120 h-120 mb-5"
      />
      <p className="text-slate-gray text-lg leading-normal font-palanquin max-w-sm">
        {feedback}
      </p>
      <div className="flex justify-center items-center gap-2.5 my-2">
        <img src={star} alt="rating icon" />
        <p className="text-slate-gray ">({rating}) </p>
      </div>
      <h3 className="font-semibold text-lg">{customerName} </h3>
    </div>
  );
};

export default ReviewCard;
