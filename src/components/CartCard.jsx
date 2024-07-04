import { CloseIcon } from "@chakra-ui/icons";
const CartCard = ({ item, inCart, setInCart }) => {
  function handleDelete() {
    setInCart(
      inCart.filter((a) => {
        return a.id !== item.id;
      })
    );
  }

  return (
    <div className="h-[150px] bg-white mb-4 shadow-sm">
      <CloseIcon onClick={handleDelete} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
    </div>
  );
};
export default CartCard;
