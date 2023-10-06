/* eslint-disable @next/next/no-img-element */
import logo from "../../assets/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-[59px] bg-brand-1 flex items-center justify-center fixed top-0 z-10">
      <Image src={logo} alt="" />
    </header>
  );
};

export default Header;
