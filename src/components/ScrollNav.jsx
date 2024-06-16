import { useState } from "react";
import fanatecFullLogo from "../assets/images/svg/fanatec-logo_white.svg";
import fanatecShortLogo from "../assets/images/svg/fanatec-f_white.svg";

import Icon from "@mdi/react";
import {
  mdiCartOutline,
  mdiAccount,
  mdiMenu,
  mdiHeartOutline,
  mdiMagnify
} from "@mdi/js";
import { useMediaQuery } from "react-responsive";
import SmallIconBtn from "./SmallIconButton";

const ScrollNav = () => {
  const [sticky, setStiky] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const changeBackground = () => {
    console.log(window.scrollY);
    window.scrollY > 64 ? setStiky(true) : setStiky(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`${
        sticky
          ? "w-full fixed transition-all translate-y-full ease-in duration-300 bottom-full"
          : "transition-all translate-y-0 ease-in duration-300"
      }`}
    >
      {sticky ? (
        isTabletOrMobile ? (
          <div className="bg-gray-800 pl-4 h-[51px] flex items-center border-y border-gray-300 border-opacity-20 ">
            <div className="basis-[40%]">
              <img
                className="w-[32px]  "
                src={fanatecShortLogo}
                alt="fanatec long logo"
              />
            </div>
            <div className="flex grow-0 items-center basis-[60%] [&>div>svg]:text-white [&>div>svg]:scale-[0.4] [&>div]:w-[52px] [&>div]:grow-0 justify-end">
              <SmallIconBtn icon={mdiHeartOutline}></SmallIconBtn>
              <SmallIconBtn icon={mdiAccount}></SmallIconBtn>
              <SmallIconBtn icon={mdiCartOutline}></SmallIconBtn>
              <SmallIconBtn icon={mdiMagnify}></SmallIconBtn>
              <SmallIconBtn icon={mdiMenu}></SmallIconBtn>
            </div>
          </div>
        ) : (
          <div className="bg-white">big</div>
        )
      ) : isTabletOrMobile ? (
        <div className="bg-gray-800">
          <div className="[&>*]:h-6 [&>*]:text-white flex justify-end gap-6 px-6 py-2">
            <Icon path={mdiHeartOutline} />
            <Icon path={mdiAccount} />
            <Icon path={mdiCartOutline} />
          </div>
          <div className="pl-4 h-[64px] flex items-center border-y border-gray-300 border-opacity-20 ">
            <div className="basis-[50%]">
              <img
                className="w-[180px]  "
                src={fanatecFullLogo}
                alt="fanatec long logo"
              />
            </div>
            <div className=" flex items-center basis-[50%] [&>div>svg]:text-white [&>div>svg]:scale-[0.5] [&>div]:max-w-[64px] justify-end">
              <div className="flex-auto border-x border-gray-300 border-opacity-20">
                <Icon path={mdiMagnify} />
              </div>
              <div className="flex-auto">
                <Icon path={mdiMenu} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">big</div>
      )}
      {isTabletOrMobile ? <div>small</div> : <div>big</div>}
    </nav>
  );
};
export default ScrollNav;
