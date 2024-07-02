import { useParams } from "react-router-dom";
import { productData } from "../assets/SampleData";

function Product() {
  const { id } = useParams();
  const product = productData.filter((item) => {
    return item.id == id;
  })[0];
  console.log(product);
  return (
    <div className="bg-white">
      product {id}
      <img src={product.image[0]} alt="" />
    </div>
  );
}
export default Product;
