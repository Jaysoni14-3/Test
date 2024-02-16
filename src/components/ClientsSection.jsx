import { Fade, Slide } from "react-awesome-reveal";
import ClientSlider from "./ClientSlider";

const ClientsSection = () => {
  return (
    <div className="clients-section w-[80vw] ml-[10%] mr-[10%] pb-[100px]">
      <div className="section-header w-full mb-[20px]">
        <h2 className="sub-heading text-custom-green mt-0 p-0 pb-[20px] text-center">
          <Fade>Clients</Fade>
        </h2>
      </div>
      <div className="section-body text-center">
        <Slide direction="up">
          <h1 className="text-custom-black font-bold text-[6vw] leading-[1.2] mt-[10px] mb-[20px]">
            Our support is described by our associates as <br /> ALL-Weather.
          </h1>
        </Slide>
        <p className="text-custom-paragraph-color w-[92%] mb-[70px] mx-auto">
          <Slide direction="up">
            We debate, we argue, we disagree – but it’s all for the greater good
            of any brand. Ask any of our associates and they will say we are
            tough. We are tough with ourselves more than anybody else. Come rain
            or shine, we always think for the brands that we are entrusted with.
            And ensure that there is always a rainbow at the end of our efforts.
          </Slide>
        </p>
      </div>
      <ClientSlider />
    </div>
  );
};

export default ClientsSection;
