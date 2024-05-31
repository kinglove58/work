import Button from "./Button";

const SubscribeCard = () => {
  return (
    <div className="flex sm:border sm:border-slate-gray rounded-full w-full flex-1 gap-10 p-2.5 items-center">
      <input type="text" placeholder="subscribe@nike.com" className="input" />
      <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Button label={"Sign Up"} fullWidth />
      </div>
    </div>
  );
};

export default SubscribeCard;
