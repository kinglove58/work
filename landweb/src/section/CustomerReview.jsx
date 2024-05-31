import ReviewCard from "../COMPONENT/ReviewCard";
import { reviews } from "../constant";

const CustomerReview = () => {
  return (
    <section className="max-container w-full items-center">
      <div className="flex flex-col justify-center mb-10 items-center">
        <h2 className="font-bold text-3xl font-montserrat">
          What Our <span className="text-coral-red">Customers</span> Say?{" "}
        </h2>
        <p className="text-slate-gray text-lg leading-normal">
          Hear genuine stories from our satisfird customers about
        </p>
        <p className="text-slate-gray text-lg leading-normal">
          their exceptional experinces with us
        </p>
      </div>
      <div className="flex justify-evenly gap-5 flex-1">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
