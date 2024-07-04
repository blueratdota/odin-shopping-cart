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
import { CloseIcon } from "@chakra-ui/icons";
import CartCard from "./CartCard";

const backToTop = () => {
  window.scrollTo(0, 0);
};

const CartDrawer = ({ onClose, sticky, inCart, setInCart }) => {
  return (
    <>
      <DrawerOverlay onClick={onClose} className="backdrop-blur" />
      <DrawerContent className={`bg-gray-100 max-w-full md:max-w-md absolute`}>
        <DrawerHeader
          className={`${sticky ? "mt-[50px]" : ""} bg-red-700 -700 text-white h-10 py-2 px-5 flex items-center justify-between`}
          onClick={onClose}
        >
          <h2 className=" text-xl font-semibold">Close cart</h2>
          <CloseIcon />
        </DrawerHeader>

        <DrawerBody className="p-4 text-lg">
          <h3 className="font-semibold pb-5">
            It looks like your cart is empty
          </h3>
          {inCart.map((item) => {
            return (
              <CartCard
                key={item.id}
                item={item}
                inCart={inCart}
                setInCart={setInCart}
              ></CartCard>
            );
          })}
          <div className="flex flex-col font-medium pl-4 [&>*]:border-b [&>*]:py-4"></div>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default CartDrawer;
