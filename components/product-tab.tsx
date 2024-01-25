import { Product } from "@/lib/types";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { PiPencilSimpleLight } from "react-icons/pi";
import { RxCheck, RxCross2, RxCrossCircled } from "react-icons/rx";
import { CiCircleCheck } from "react-icons/ci";
import { updateProduct } from "@/lib/dataTransfer";

export const ProductTab = ({ product }: { product: Product }) => {
  const [editOn, setEditOn] = useState<boolean>(false);
  const [formData, setFormData] = useState<Product>(product);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);

  const saveEdit = () => {
    updateProduct(formData);
    setEditOn((prevState) => !prevState);
  };

  const cancelEdit = () => {
    setFormData(product);
    setEditOn((prevState) => !prevState);
  };

  return (
    <li className="bg-gray-100 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between">
      <div className="flex items-center">
        <div className="w-12">
          <Image src={product.img} alt="" width={50} height={50} />
        </div>
        <p className="pl-4">
          {editOn ? (
            <input
              type="text"
              value={formData.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          ) : (
            formData.name
          )}
        </p>
      </div>
      <p className="text-gray-600 sm:text-left text-right">
        {editOn ? (
          <input
            type="number"
            value={formData.stock}
            name="stock"
            onChange={(e) => handleChange(e)}
          />
        ) : (
          formData.stock
        )}
      </p>
      <p className="text-gray-600 sm:text-left text-right">
        {editOn ? (
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => handleChange(e)}
          />
        ) : (
          formData.price
        )}
      </p>
      <div className="sm:flex hidden justify-between items-center">
        <p>
          {editOn ? (
            <select
              name="available"
              id="available"
              defaultValue={formData.available ? "true" : "false"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  available: e.target.value === "true" ? true : false,
                })
              }
            >
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
          ) : formData.available ? (
            <CiCircleCheck
              size={30}
              className="p-1 bg-green-500 rounded-3xl text-white"
            />
          ) : (
            <RxCrossCircled
              size={30}
              className="p-1 bg-red-500 rounded-3xl text-white"
            />
          )}
        </p>
        {editOn ? (
          <div className="flex gap-4">
            <button
              onClick={cancelEdit}
              className="p-2 bg-red-500 rounded-md text-white"
            >
              <RxCross2 />
            </button>
            <button
              onClick={saveEdit}
              className="p-2 bg-green-500 rounded-md text-white"
            >
              <RxCheck />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditOn((prevState) => !prevState)}
            className="p-2 bg-orange-500 rounded-md text-white"
          >
            <PiPencilSimpleLight />
          </button>
        )}
      </div>
    </li>
  );
};
