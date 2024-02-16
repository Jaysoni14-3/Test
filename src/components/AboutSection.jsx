import { Slide } from "react-awesome-reveal";
import { FaArrowCircleRight } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="about-section w-[80%] mx-auto p-[120px]">
      <div className="section-header w-full mb-[20px]">
        <Slide direction="up">
          <h2 className="sub-heading text-custom-green mt-0 p-0 ">About us</h2>
        </Slide>
      </div>
      <div className="section-body flex flex-row w-full mt-[10px] mb-[20px]">
        <div className="left w-7/12">
          <Slide direction="left">
            <h1 className="text-custom-black font-bold text-[6vw] leading-[1.2]">
              More than; XL or XXL, we are <br /> ALL-Sized.
            </h1>
          </Slide>
        </div>
        <div className="right w-5/12 flex flex-col items-start gap-[20px]">
          <Slide direction="right">
            <h2 className="text-[32px] text-custom-black font-semibold tracking-[.01rem] leading-[2.5rem] w-full">
              One for all. All for one.
            </h2>
            <p className="text-custom-paragraph-color">
              More than size, we bring our entirety to the task at hand.
              Irrespective of the scope of work, everybody pitches in, bringing
              all their knowledge and expertise to the fore. And speaking of
              sizes, we do not believe in the cliché, One Size fits all. Our
              solutions are unique, contemporary and big on impact.
            </p>
            <button className="text-[18px] text-custom-black flex items-center gap-2 font-semibold capitalize hover:text-custom-green transition-colors">
              Know more <FaArrowCircleRight size={50} />
            </button>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
