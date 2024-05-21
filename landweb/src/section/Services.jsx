import { services } from "../constant";

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      <div>
      {services.map((service) => (
        <div key={service.title} className="flex flex-col items-center gap-4">
          <img src={service.icon} alt={service.title} width={40} height={40} />
          <h3 className="font-bold text-2xl">{service.title}</h3>
          <p className="text-center">{service.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Services;