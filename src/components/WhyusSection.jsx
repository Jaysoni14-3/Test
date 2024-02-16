import { Fade, Slide } from "react-awesome-reveal";
import { FaArrowCircleRight } from "react-icons/fa";

const WhyusSection = () => {
  return (
    <div className="whyus-section w-full bg-custom-yellow py-[120px]">
      <div className="section-header">
        <Fade>
          <h2 className="sub-heading text-white text-center">Why us</h2>
        </Fade>
      </div>
      <div className="section-body flex flex-col justify-center items-center text-center">
        <h1 className="text-custom-black font-bold text-[6vw] leading-[1.2] w-[71%] mt-[10px] mb-[20px]">
          <Slide direction="down">
            No designations, but each of us have the role to Go ALL-Out.
          </Slide>
        </h1>
        <p className="mb-[16px] w-[79%]">
          <Slide direction="up">
            More than many heads, we bring different dimensions of thinking to
            the table. Each of us here play many roles, each of us turn every
            problem on its head – there is no shortage of efforts. Each of us
            believe that there are rules, but there are no boundaries.
            Everything is best taken care by each of us being mindful of every
            little thing.
          </Slide>
        </p>
        <Slide direction="up">
          <button className="text-[18px] text-custom-black flex items-center gap-2 font-semibold capitalize hover:text-custom-green transition-colors">
            Know more <FaArrowCircleRight size={50} />
          </button>
        </Slide>
      </div>
    </div>
  );
};

export default WhyusSection;
