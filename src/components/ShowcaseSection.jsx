import { Slide } from "react-awesome-reveal";

import { FaArrowCircleRight } from "react-icons/fa";
import ShowcaseImage1 from "../assets/Showcase-1.png";
import ShowcaseImage10 from "../assets/Showcase-10.png";
import ShowcaseImage2 from "../assets/Showcase-2.png";
import ShowcaseImage3 from "../assets/Showcase-3.png";
import ShowcaseImage4 from "../assets/Showcase-4.png";
import ShowcaseImage5 from "../assets/Showcase-5.png";
import ShowcaseImage6 from "../assets/Showcase-6.png";
import ShowcaseImage7 from "../assets/Showcase-7.png";
import ShowcaseImage8 from "../assets/Showcase-8.png";
import ShowcaseImage9 from "../assets/Showcase-9.png";

const ShowcaseSection = () => {
  return (
    <div className="showcase-section p-[120px] w-[80vw] ml-[10%] mr-[10%]">
      <h2 className="sub-heading text-custom-green mb-[20px]">
        <Slide direction="up">Showcase</Slide>
      </h2>
      <div className="section-heading">
        <Slide direction="left">
          <h1 className="text-custom-black font-bold text-[6vw] leading-[1.2] mt-[10px] mb-[20px] max-w-[56vw]">
            We shape brand success; we are <br /> ALL-Round.
          </h1>
        </Slide>
      </div>
      <div className="section-body flex flex-wrap">
        <div className="first w-1/2 flex flex-col justify-center items-start">
          <p className="mb-[14px] text-custom-paragraph-color">
            <Slide direction="up">
              A game is more than about winning or losing. Its beauty lies in
              many individual brilliances synchronising with the game plan.
            </Slide>
          </p>
          <Slide direction="up">
            <button className="text-[18px] text-custom-black flex items-center gap-2 font-semibold capitalize hover:text-custom-green transition-colors ">
              Know more <FaArrowCircleRight size={50} />
            </button>
          </Slide>
        </div>

        <div className="w-3/12">
          <Slide direction="left">
            <img
              src={ShowcaseImage1}
              className="w-full h-auto"
              alt="showcase image"
            />
          </Slide>
        </div>
        <div className="w-3/12">
          <Slide direction="right">
            <img
              src={ShowcaseImage2}
              className="w-full h-auto"
              alt="showcase image"
            />
          </Slide>
        </div>
        <div className="w-3/12">
          <Slide direction="right">
            <img
              src={ShowcaseImage3}
              className="w-full h-auto"
              alt="showcase image"
            />
          </Slide>
        </div>
        <div className="w-3/12">
          <Slide direction="up">
            <img
              src={ShowcaseImage4}
              className="w-full h-auto"
              alt="showcase image"
            />
          </Slide>
        </div>
        <div className="w-3/12">
          <Slide direction="down">
            <img
              src={ShowcaseImage5}
              className="w-full h-auto"
              alt="showcase image"
            />
          </Slide>
        </div>
        <div className="w-3/12">
          <Slide direction="up">
            <img
              src={ShowcaseImage6}
              className="w-full h-auto"
              alt="showcase image"
            />
          </Slide>
        </div>
        <div className="w-3/12">
          <Slide direction="up">
            <img
              src={ShowcaseImage7}
              className="w-full h-auto"
              alt="showcase image"
            />
          </Slide>
        </div>
        <div className="w-3/12">
          <Slide direction="right">
            <img
              src={ShowcaseImage8}
              className="w-full h-auto"
              alt="showcase image"
            />
          </Slide>
        </div>
        <div className="w-3/12">
          <Slide direction="up">
            <img
              src={ShowcaseImage9}
              className="w-full h-auto"
              alt="showcase image"
            />
          </Slide>
        </div>
        <div className="w-3/12">
          <Slide direction="right">
            <img
              src={ShowcaseImage10}
              className="w-full h-auto"
              alt="showcase image"
            />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;

// {showcaseImages.map((showcaseImage, idx) => (
//   <div key={idx} className="w-3/12">
//     <img
//       src={showcaseImage.path}
//       className="w-full h-auto"
//       alt="showcase image"
//     />
//   </div>
// ))}
