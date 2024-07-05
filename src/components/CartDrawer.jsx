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
import numeral from "numeral";

const backToTop = () => {
  window.scrollTo(0, 0);
};

const CartDrawer = ({
  onClose,
  sticky,
  inCart,
  setInCart,
  setIsDrawerOpen
}) => {
  const totalCost = inCart.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);
  return (
    <>
      <DrawerOverlay
        onClick={() => {
          onClose();
          setIsDrawerOpen(false);
        }}
        className="backdrop-blur"
      />
      <DrawerContent className={`bg-gray-100 max-w-full md:max-w-md absolute`}>
        <DrawerHeader
          className={`${sticky ? "mt-[50px]" : ""} bg-red-700 text-white h-10 py-2 px-5 flex items-center justify-between`}
          onClick={() => {
            onClose();
            setIsDrawerOpen(false);
          }}
        >
          <h2 className=" text-xl font-semibold">Close cart</h2>
          <CloseIcon />
        </DrawerHeader>

        <DrawerBody className="p-4 text-lg h-full overflow-auto">
          {inCart.length <= 0 ? (
            <h3 className="font-semibold pb-5">
              It looks like your cart is empty
            </h3>
          ) : (
            <>
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
            </>
          )}

          <div className="flex flex-col font-medium pl-4 [&>*]:border-b [&>*]:py-4"></div>
        </DrawerBody>

        <div className="bg-white border-t border-l py-2 px-4 bottom-0 flex justify-between items-center">
          <div className="mr-10">
            <span className="mr-2 text-xl font-semibold">Total: </span>{" "}
            <span className="text-lg text-emerald-500 font-medium">
              ¥ {numeral(totalCost).format("0,0")}
            </span>
          </div>
          <div>
            <Button className="border bg-black text-white text-lg rounded-md py-1 px-5">
              Checkout
            </Button>
          </div>
        </div>
      </DrawerContent>
    </>
  );
};

export default CartDrawer;
