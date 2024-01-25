import AddProductButton from "@/components/add-product";
import Header from "@/components/header";
import { ProductTab } from "@/components/product-tab";
import { getProducts } from "@/lib/dataTransfer";
import { useQuery } from "@tanstack/react-query";

const ProductsPage = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(products);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header title="Products" />
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="w-full flex justify-between">
            <div>Searchbar</div>
            <AddProductButton />
          </div>
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between">
            <span>Name</span>
            <span className="sm:text-left text-right">Stock</span>
            <span className="hidden md:grid">Price</span>
            <span className="hidden md:grid">Available</span>
          </div>
          <ul>
            {products?.map((product, id) => (
              <ProductTab key={id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
