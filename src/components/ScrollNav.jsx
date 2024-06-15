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

const ScrollNav = () => {
  const [sticky, setStiky] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    window.scrollY > 48 ? setStiky(true) : setStiky(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`${
        sticky
          ? "bg-orange-400 w-full fixed transition-all translate-y-full ease-in duration-300 bottom-full"
          : "bg-blue-400 transition-all translate-y-0 ease-in duration-300"
      }`}
    >
      {sticky ? (
        <div>icons only nav</div>
      ) : (
        <div className="bg-gray-800">
          <div className="[&>*]:h-6 [&>*]:text-white flex justify-end gap-6 px-6 py-2">
            <Icon path={mdiHeartOutline} />
            <Icon path={mdiAccount} />
            <Icon path={mdiCartOutline} />
          </div>
          <div className="pl-4 h-[64px] [&>div>svg]:text-white [&>div>svg]:scale-50 [&>div>svg]:w-[64px] flex items-center border-y border-gray-300 border-opacity-20 ">
            <div className="basis-[70%]">
              <img
                className="w-[180px]  "
                src={fanatecFullLogo}
                alt="fanatec long logo"
              />
            </div>
            <div className="basis-[15%] border-x border-gray-300 border-opacity-20">
              <Icon path={mdiMagnify} />
            </div>
            <div className="basis-[15%]">
              <Icon path={mdiMenu} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default ScrollNav;
