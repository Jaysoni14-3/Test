import logo from "../assets/Brand-logo-V@150.svg";

const Logo = () => {
  return (
    <div className="logo fixed w-[10%] top-[20px] h-full">
      <div className="img-container w-full ">
        <img
          className="w-[45%] h-auto pl-[15px] relative top-[40px] left-[20%] right-[20%]"
          src={logo}
          alt="companyLogo"
        />
      </div>
    </div>
  );
};

export default Logo;
