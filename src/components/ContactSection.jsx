import { Fade, Slide } from "react-awesome-reveal";
import { FaArrowCircleRight } from "react-icons/fa";
import ContactUsImage from "../assets/contact-us.png";

const ContactSection = () => {
  return (
    <div className="contact-us-section bg-[rgba(140,149,159,0.18)] mx-auto p-[120px]">
      <div className="px-[10%]">
        <div className="section-header">
          <h2 className="sub-heading text-custom-green">
            <Fade>Contact</Fade>
          </h2>
        </div>
        <div className="section-body">
          <div className="flex">
            <div className="w-7/12">
              <Slide direction="left">
                <h1 className="text-custom-black font-bold text-[6vw] leading-[1.2] mt-[10px] mb-[20px] max-w-[35vw]">
                  If you wish to meet us, we are <br /> ALL-Yours.
                </h1>
              </Slide>
            </div>
            <div className="w-5/12">
              <img src={ContactUsImage} alt="contact us image" />
            </div>
          </div>

          <div className="w-1/2">
            <Slide direction="up">
              <p className="pr-[38px] mb-[14px]">
                Progression stems from discussions. We are always open for a
                conversation, a meeting of minds. We look at every meeting place
                as a crossroad, opening into infinite possibilities.
              </p>
              <button className="text-[18px] text-custom-black flex items-center gap-2 font-semibold capitalize hover:text-custom-green transition-colors mb-[20px]">
                Send Email <FaArrowCircleRight size={50} />
              </button>
              <div>
                <span>bethechange@beanstalkasia.com</span>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
