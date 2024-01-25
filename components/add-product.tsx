import { addProduct } from "@/lib/dataTransfer";
import { Product } from "@/lib/types";
import React, { FormEvent, useState } from "react";

const AddProductButton = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<Product>({
    name: "",
    stock: "0",
    price: "0",
    img: "",
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addNewProduct = () => {
    addProduct(formData);
    setShowModal(false);
  };
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="p-2 bg-purple-500 text-white rounded-lg"
      >
        Add New
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[51] outline-none focus:outline-none">
            <div className="relative w-full md:w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add New Product</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto flex flex-col gap-2">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    placeholder="product name"
                    value={formData?.name}
                  />
                  <label>Stock</label>
                  <input
                    type="number"
                    name="stock"
                    onChange={(e) => handleChange(e)}
                    defaultValue="0"
                  />
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    onChange={(e) => handleChange(e)}
                    defaultValue="0"
                  />
                  <label>Image Link</label>
                  <input
                    type="text"
                    name="img"
                    onChange={(e) => handleChange(e)}
                    placeholder="product image link"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-orange-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addNewProduct}
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddProductButton;
