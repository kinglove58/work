
const ServiceCard = ({ imgURL, heading, subtitle }) => {
  return (
    <div className="bg-white border-radius-8 flex flex-col ">
      <img src={imgURL} alt="image icon" />
      <h3 className="font-bold font-montserrat">{heading}</h3>
      <p className="text-slate-gray">{subtitle} </p>
    </div>
  )
}

export default ServiceCard