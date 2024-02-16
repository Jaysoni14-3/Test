import Logo from "./Logo";

const Navbar = () => {
  const navLinks = [
    { name: "Home" },
    { name: "About" },
    { name: "Service" },
    { name: "Work" },
    { name: "Contact" },
  ];

  return (
    <>
    <Logo />
    <div className="navbar w-[10%] fixed right-[5px] top-[20px]">
      {/* If active add this color #00FD8B else rgba(0,0,0,0.5) */}
      <li className="list-none flex flex-col items-end gap-[3px] px-[15px]">
        {navLinks.map((navlink, idx) => (
          <a
            key={idx}
            className="font-bold text-[22px] py-[3px] text-[rgba(0,0,0,0.5)] hover:text-custom-black"
            href="#"
          >
            {navlink.name}
          </a>
        ))}
      </li>
    </div>
    </>
  );
};

export default Navbar;
