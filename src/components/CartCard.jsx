import { CloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
// Import modal
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";

const CartCard = ({ item, inCart, setInCart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  function handleDelete() {
    setInCart(
      inCart.filter((a) => {
        return a.id !== item.id;
      })
    );
  }
  function addQty() {
    setInCart(
      inCart.map((a) => {
        if (item.id == a.id) {
          return { ...a, quantity: item.quantity + 1 };
        } else return a;
      })
    );
  }
  function addQty() {
    setInCart(
      inCart.map((a) => {
        if (item.id == a.id) {
          return { ...a, quantity: item.quantity + 1 };
        } else return a;
      })
    );
  }
  function minusQty() {
    setInCart(
      inCart.map((a) => {
        if (item.id == a.id) {
          return { ...a, quantity: item.quantity - 1 };
        } else return a;
      })
    );
  }

  return (
    <div className="h-[150px] bg-white mb-4 shadow-sm flex px-4 py-2 gap-4 relative">
      <div className="basis-2/5">
        <img
          src={item.thumbnail}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="basis-3/5 relative">
        <CloseIcon onClick={onOpen} className="absolute right-0" />

        <p className="mt-5 text-lg font-semibold">{item.name}</p>
        <p className="text-lg text-emerald-500 font-medium absolute bottom-2">
          ¥ {item.price}
        </p>
        <div className="flex absolute right-0 bottom-2">
          <Button
            className="w-6 border font-semibold"
            onClick={() => {
              if (item.quantity - 1 <= 0) {
                onOpen();
              } else minusQty();
            }}
          >
            -
          </Button>
          <p className="px-4 border-y">{item.quantity}</p>
          <Button className="w-6 border font-semibold" onClick={addQty}>
            +
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className="bg-gray-400 bg-opacity-40 backdrop-blur" />
        <ModalContent className="bg-white max-w-[85%] absolute md:max-w-[80%] top-52 mx-auto">
          <ModalHeader className="bg-black text-white uppercase px-2 py-1 flex justify-between items-center">
            <p>Confirmation</p>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody className="p-4">
            Are you sure you want to remove this item from your cart?
            <div className=" flex gap-4 justify-center mt-4">
              <Button className="w-20 border" onClick={onClose}>
                Cancel
              </Button>
              <Button
                className="w-20 border"
                onClick={() => {
                  handleDelete();
                  onClose();
                }}
              >
                Yes
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default CartCard;
