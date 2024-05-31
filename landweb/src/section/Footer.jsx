import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => {
  return (
    <section className="max-container">
      <div className="flex max-lg:flex-col flex-wrap gap-20 items-start justify-between">
        <div className="flex items-start flex-col">
          <a href="/">
            <img
              src={footerLogo}
              alt="Nike logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="text-white-400 sm:max-w-sm text-base font-montserrat leading-7 mt-6">
            Get shoes ready for the new term at your nearest Nike store. find
            your perfect size in store. Get Rewards.
          </p>
          <div className="flex item-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="bg-white rounded-full h-12 w-12 flex justify-center items-center"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white-400 text-2xl font-montserrat leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}{" "}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-sm:flex-col  mt-24 max-sm:items-center">
        <div className="flex items-center flex-1 justify-start gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright icon"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p className="text-slate-gray pl-3">Copyright. All right reserved</p>
        </div>
        <p className="text-slate-gray cursor-pointer font-montserrat">
          Terms & Conditions Apply
        </p>
      </div>
    </section>
  );
};

export default Footer;
