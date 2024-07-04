import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Drawer, useDisclosure } from "@chakra-ui/react";
//image imports
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
import CartDrawer from "./CartDrawer";
import MenuDrawer from "./MenuDrawer";

const ScrollNav = ({ inCart, setInCart }) => {
  const [sticky, setStiky] = useState(false);
  //for drawer
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart
  } = useDisclosure();
  const {
    isOpen: isOpenMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu
  } = useDisclosure();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const changeBackground = () => {
    // console.log(window.scrollY);
    window.scrollY > 64 ? setStiky(true) : setStiky(false);
  };
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={`bg-gray-800 z-[1] font-bold  ${
          sticky
            ? "w-full fixed transition-all translate-y-full ease-in duration-300 bottom-full"
            : "transition-all translate-y-0 ease-in-out duration-100"
        }`}
      >
        {sticky ? (
          isTabletOrMobile ? (
            //=============SMALL SIZE SCROLLED DOWN
            <div className="pl-4 h-[51px] flex items-center border-y border-gray-300 border-opacity-20 ">
              <Link className="basis-[40%]" to={"/"}>
                <img
                  className="w-[32px]  "
                  src={fanatecShortLogo}
                  alt="fanatec long logo"
                />
              </Link>
              <div className="flex grow-0 items-center basis-[60%] [&>div>svg]:text-white [&>div>svg]:scale-[0.4] [&>div]:w-[52px] [&>div]:grow-0 justify-end">
                <SmallIconBtn icon={mdiHeartOutline}></SmallIconBtn>
                <SmallIconBtn icon={mdiAccount}></SmallIconBtn>
                <SmallIconBtn
                  icon={mdiCartOutline}
                  onClick={onOpenCart}
                ></SmallIconBtn>
                <SmallIconBtn icon={mdiMagnify}></SmallIconBtn>
                <SmallIconBtn
                  icon={mdiMenu}
                  onClick={onOpenMenu}
                ></SmallIconBtn>
              </div>
            </div>
          ) : (
            //=============SMALL SIZE SCROLLED DOWN
            <div className="pl-4 h-[51px] flex items-center border-y border-gray-300 border-opacity-20 [&>*]:text-white">
              <Link className="basis-[10%]" to={"/"} onClick={backToTop}>
                <img
                  className="w-[32px]  "
                  src={fanatecShortLogo}
                  alt="fanatec long logo"
                />
              </Link>
              <div className="flex basis-full gap-5 my-auto justify-center [&>*]:shrink-0 overflow-clip">
                <Link
                  to={"all-products"}
                  className="bg-link"
                  onClick={backToTop}
                >
                  ALL PRODUCTS
                </Link>
                <Link
                  to={"wheel-bases"}
                  className="bg-link"
                  onClick={backToTop}
                >
                  RACING WHEELS/ DIRECT DRIVE BASES
                </Link>
                <Link
                  to={"steering-wheels"}
                  className="bg-link"
                  onClick={backToTop}
                >
                  STEERING WHEELS
                </Link>
                <Link to={"pedals"} className="bg-link" onClick={backToTop}>
                  PEDALS
                </Link>
                <Link
                  to={"shifters/others"}
                  className="bg-link"
                  onClick={backToTop}
                >
                  SHIFTER/OTHERS{" "}
                </Link>
                <Link
                  to={"accessories"}
                  className="bg-link"
                  onClick={backToTop}
                >
                  ACCESSORIES{" "}
                </Link>
              </div>
              <div className="flex grow-0 items-center [&>div>svg]:scale-[0.4] [&>div]:w-[52px] [&>div]:grow-0 justify-end">
                <SmallIconBtn icon={mdiHeartOutline}></SmallIconBtn>
                <SmallIconBtn icon={mdiAccount}></SmallIconBtn>
                <SmallIconBtn
                  icon={mdiCartOutline}
                  onClick={onOpenCart}
                ></SmallIconBtn>
                <SmallIconBtn icon={mdiMagnify}></SmallIconBtn>
              </div>
            </div>
          )
        ) : isTabletOrMobile ? (
          // ===============SMALL SIZE FOR UNSCROLLED DOWN
          <div className="">
            <div className="[&>*]:h-6 [&>*]:text-white flex justify-end gap-6 px-6 py-2">
              <Icon path={mdiHeartOutline} />
              <Icon path={mdiAccount} />
              <Icon path={mdiCartOutline} onClick={onOpenCart} />
            </div>
            <div className="pl-4 h-[64px] flex items-center border-y border-gray-300 border-opacity-20 ">
              <Link className="basis-[50%]" to={"/"}>
                <img
                  className="w-[180px]  "
                  src={fanatecFullLogo}
                  alt="fanatec long logo"
                />
              </Link>
              <div className=" flex items-center basis-[50%] [&>div>svg]:text-white [&>div>svg]:scale-[0.5] [&>div]:max-w-[64px] justify-end">
                <div className="flex-auto border-x border-gray-300 border-opacity-20">
                  <Icon path={mdiMagnify} />
                </div>
                <div className="flex-auto" onClick={onOpenMenu}>
                  <Icon path={mdiMenu} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // ===============BIG SIZE FOR un-SCROLLED DOWN
          <div className="">
            <div className="[&>div>*]:h-6 [&>div>*]:text-white [&>div>p]:font-thin flex justify-end gap-6 px-6 py-2">
              <div className="flex gap-2 items-center bg-icon">
                <Icon path={mdiHeartOutline} />
                <p>Wishlists</p>
              </div>
              <div className="flex gap-2 items-center bg-icon">
                <Icon path={mdiAccount} />
                <p>My Account</p>
              </div>
              <div
                className="flex gap-2 items-center bg-icon"
                onClick={onOpenCart}
              >
                <Icon path={mdiCartOutline} />
                <p>Cart</p>
              </div>
            </div>
            <div className="border-y border-gray-300 border-opacity-20 flex h-[64px] [&>div]:grow [&>*]:text-white">
              <Link
                className="basis-[20%] max-w-[250px] my-auto pl-4 grow "
                to={"/"}
              >
                <img
                  className="w-[180px] "
                  src={fanatecFullLogo}
                  alt="fanatec long logo"
                />
              </Link>
              <div className="flex gap-5 my-auto justify-center [&>*]:shrink-0 overflow-clip">
                <Link to={"all-products"} className="bg-link">
                  ALL PRODUCTS
                </Link>
                <Link to={"wheel-bases"} className="bg-link">
                  RACING WHEELS/ DIRECT DRIVE BASES
                </Link>
                <Link to={"steering-wheels"} className="bg-link">
                  STEERING WHEELS
                </Link>
                <Link to={"pedals"} className="bg-link">
                  PEDALS
                </Link>
                <Link to={"shifters/others"} className="bg-link">
                  SHIFTER/ OTHERS
                </Link>
                <Link to={"accessories"} className="bg-link">
                  ACCESSORIES
                </Link>
              </div>
              <div className="border-l border-gray-300 border-opacity-20 flex max-w-[350px] ">
                <input type="text" className="bg-transparent grow pl-4" />
                <Icon className="p-4" path={mdiMagnify} />
              </div>
            </div>
          </div>
        )}
      </nav>
      <Drawer isOpen={isOpenCart} placement="right" onClose={onCloseCart}>
        <CartDrawer
          onClose={onCloseCart}
          sticky={sticky}
          inCart={inCart}
          setInCart={setInCart}
        ></CartDrawer>
      </Drawer>
      <Drawer isOpen={isOpenMenu} placement="right" onClose={onCloseMenu}>
        <MenuDrawer onClose={onCloseMenu} sticky={sticky}></MenuDrawer>
      </Drawer>
    </>
  );
};
export default ScrollNav;
