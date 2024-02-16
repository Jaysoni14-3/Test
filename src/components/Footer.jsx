import { Slide, Zoom } from "react-awesome-reveal";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer py-[70px] px-0 text-center">
      <div className="icon  flex justify-center items-center bg-black w-[100px] h-[100px] rounded-full mt-[20px] mx-auto mb-[20px]">
        <Slide direction="down">
          <FaLocationDot className="text-custom-green" size={50} />
        </Slide>
      </div>
      <h6 className="mt-[10px] mb-[20px]">
        <Zoom>
          A / 201, 2nd Floor, Polaris Business Park, Off Marol-Maroshi Road,
          Andheri (E), Mumbai - 400059
        </Zoom>
      </h6>
      <h6 className="mt-[10px] mb-[20px]">
        <Zoom>
          House No.72/26, Milan Marg, Tripureshwor, Ward No.11, Kathmandu, Nepal
        </Zoom>
      </h6>
      <p className="copyright-text text-[14px] text-[rgba(0,0,0,.5)]">
        Copyright © 2022 BeanstalkAsia. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
