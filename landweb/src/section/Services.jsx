import ServiceCard from "../COMPONENT/ServiceCard";
import { services } from "../constant";

const Services = () => {
  return (
    <section className="max-container flex flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service}/>
      ))}

    </section>
  );
};

export default Services;
