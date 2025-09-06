import ProductInfo from "./ProductInfo";
import Details from "./Details";
import Declaration from "./Declaration";

export default function SellProduct() {
  return (
    <div className="bg-green-800 text-white min-h-screen p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Product Information</h1>
      <ProductInfo />
      <Details />
      <Declaration />
    </div>
  );
}
