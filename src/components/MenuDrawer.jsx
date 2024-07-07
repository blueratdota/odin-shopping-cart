import {
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";

const MenuDrawer = ({
  onClose,
  sticky,
  setIsDrawerOpen,
  setShowSearch,
  setQuery
}) => {
  const menuClick = () => {
    onClose();
    window.scrollTo(0, 0);
    setIsDrawerOpen(false);
    setShowSearch(false);
    setQuery("");
  };
  return (
    <>
      <DrawerOverlay
        onClick={() => {
          onClose();
          setIsDrawerOpen(false);
        }}
        className="backdrop-blur"
      />
      <DrawerContent className={`bg-gray-100 max-w-xs absolute`}>
        <DrawerHeader
          className={`${sticky ? "mt-[50px]" : ""} bg-gray-700 text-white h-10 py-2 px-5 flex items-center justify-between`}
          onClick={() => {
            onClose();
            setIsDrawerOpen(false);
          }}
        >
          <h2 className=" text-xl font-semibold">Close menu</h2>
          <CloseIcon />
        </DrawerHeader>

        <DrawerBody className="p-4 text-lg">
          <h3 className="font-semibold pb-5">Categories</h3>
          <div className="flex flex-col font-medium pl-4 [&>*]:border-b [&>*]:py-4">
            <Link to={"all-products"} onClick={menuClick}>
              ALL PRODUCTS
            </Link>
            <Link to={"wheel-bases"} onClick={menuClick}>
              RACING WHEELS/ DIRECT DRIVE BASES
            </Link>
            <Link to={"steering-wheels"} onClick={menuClick}>
              STEERING WHEELS
            </Link>
            <Link to={"pedals"} onClick={menuClick}>
              PEDALS
            </Link>
            <Link to={"shifters/others"} onClick={menuClick}>
              SHIFTER/OTHERS{" "}
            </Link>
            <Link to={"accessories"} onClick={menuClick}>
              ACCESSORIES{" "}
            </Link>
            <Link to={"/"} className="font-semibold" onClick={menuClick}>
              GO BACK TO HOME{" "}
            </Link>
          </div>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default MenuDrawer;
