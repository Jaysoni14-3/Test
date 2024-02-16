import videoSrc from "../assets/websiteIntro.mp4";

const HeroSection = () => {
  return (
    <div className="hero-section w-4/5 relative left-[10%] right-[10%]">
      <video autoPlay muted>
        <source src={videoSrc} />
      </video>
    </div>
  );
};

export default HeroSection;
