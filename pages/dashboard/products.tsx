import Header from "@/components/header";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

const ProductsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header title="Products" />
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Stock</span>
          </div>
          <ul>
            {PRODUCTS.map((product, id) => (
              <li
                key={id}
                className="bg-gray-100 hover:bg-gray-150 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="w-12">
                    <img src={product.img} alt="" />
                  </div>
                  <p className="pl-4">{product.name}</p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {product.stock}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
