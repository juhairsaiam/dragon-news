import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img className="w-[360px]" src={logo} alt="" />

      <p className="text-[18px] my-3">Journalism Without Fear or Favour</p>
      <p className="font-semibold">{format(new Date(), "EEEE, LLLL d, y")}</p>
    </div>
  );
};

export default Header;
