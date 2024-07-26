import { Link, useLocation } from "react-router-dom";
import homeLogo from "/home.svg";
import homeLogo_ from "/_home.svg";
import earnLogo from "/earn.svg";
import earnLogo_ from "/_earn.svg";
import friendLogo from "/friend.svg";
import friendLogo_ from "/_friend.svg";
import skinLogo from "/skin.svg";
import skinLogo_ from "/_skin.svg";
import airdropLogo from "/airdrop.svg";
import airdropLogo_ from "/_airdrop.svg";
import { Outlet } from "react-router-dom";

const nav_list = [
  { name: "Earn", url: "/earn", noLogo: earnLogo_, yesLogo: earnLogo },
  { name: "Friend", url: "/friend", noLogo: friendLogo_, yesLogo: friendLogo },
  { name: "Home", url: "/", noLogo: homeLogo_, yesLogo: homeLogo },
  { name: "Skin", url: "/skin", noLogo: skinLogo_, yesLogo: skinLogo },
  {
    name: "Airdrop",
    url: "/airdrop",
    noLogo: airdropLogo_,
    yesLogo: airdropLogo,
  },
];

export default function BottomNav() {
  let location = useLocation();
  console.log(typeof location.pathname);
  return (
    <div className="w-full h-screen">
      {/* {location.pathname !== "/" ? (
        <img
          src="/back-img-pure.jpg"
          className="w-full h-screen fixed bottom-0 left-0 z-[-1]"
        />
      ) : (
        <img
          src="/back-img.jpg"
          className="w-full h-screen fixed bottom-0 left-0 z-[-1]"
        />
      )} */}
      <Outlet />
      {/* bottom navbar */}
      <div className="w-full flex items-center justify-evenly p-1 fixed bottom-0">
        {nav_list.map((item) => (
          <Link
            to={item.url}
            key={item.name}
            className="flex flex-col items-center relative"
          >
            <div
              className={String.raw`flex flex-col relative items-center transition scale-[0.8] duration-[0.4s] ${
                location.pathname === item.url &&
                "translate-y-[-1.5rem] scale-[1.0]"
              }`}
            >
              <img
                className="w-[42.6px] h-[45.3px]"
                src={
                  location.pathname === item.url ? item.yesLogo : item.yesLogo
                }
              />

              <span
                className={String.raw`text-xl font-Nishiki font-bold transition duration-[0.4s] ${
                  location.pathname === item.url
                    ? "bg-gradient-to-b from-[#8E1E24] via-[#FDDBAD] to-[#F2C88A] text-transparent bg-clip-text drop-shadow-[0px 6px 3px rgba(0, 0, 0, 0.004)]"
                    : "bg-gradient-to-b from-[#ffffff] via-[#b5b5b5] to-[#ffffff] text-transparent bg-clip-text drop-shadow-[0px 6px 3px rgba(0, 0, 0, 0.004)]"
                } `}
              >
                {item.name}
              </span>
            </div>
            <img
              className={String.raw` w-[40.4px] h-[22px] transition duration-[0.4s] bottom-[-1.5rem] scale-[0.01] absolute ${
                location.pathname === item.url &&
                " translate-y-[-1.5rem] scale-[1.0]"
              }`}
              src="/arrow.svg"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
