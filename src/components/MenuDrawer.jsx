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

const MenuDrawer = ({ onClose, sticky }) => {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <DrawerOverlay onClick={onClose} className="backdrop-blur" />
      <DrawerContent className={`bg-gray-100 max-w-xs absolute`}>
        <DrawerHeader
          className={`${sticky ? "mt-[50px]" : ""} bg-gray-700 text-white h-10 py-2 px-5 flex items-center justify-between`}
          onClick={onClose}
        >
          <h2 className=" text-xl font-semibold">Close menu</h2>
          <CloseIcon />
        </DrawerHeader>

        <DrawerBody className="p-4 text-lg">
          <h3 className="font-semibold pb-5">Categories</h3>
          <div className="flex flex-col font-medium pl-4 [&>*]:border-b [&>*]:py-4">
            <Link
              to={"all-products"}
              onClick={() => {
                onClose();
                backToTop();
              }}
            >
              ALL PRODUCTS
            </Link>
            <Link
              to={"wheel-bases"}
              onClick={() => {
                onClose();
                backToTop();
              }}
            >
              RACING WHEELS/ DIRECT DRIVE BASES
            </Link>
            <Link
              to={"steering-wheels"}
              onClick={() => {
                onClose();
                backToTop();
              }}
            >
              STEERING WHEELS
            </Link>
            <Link
              to={"pedals"}
              onClick={() => {
                onClose();
                backToTop();
              }}
            >
              PEDALS
            </Link>
            <Link
              to={"shifters/others"}
              onClick={() => {
                onClose();
                backToTop();
              }}
            >
              SHIFTER/OTHERS{" "}
            </Link>
            <Link
              to={"accessories"}
              onClick={() => {
                onClose();
                backToTop();
              }}
            >
              ACCESSORIES{" "}
            </Link>
            <Link
              to={"/"}
              className="font-semibold"
              onClick={() => {
                onClose();
                backToTop();
              }}
            >
              GO BACK TO HOME{" "}
            </Link>
          </div>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default MenuDrawer;
