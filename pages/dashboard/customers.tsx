import Header from "@/components/header";
import { RECENT_ORDERS } from "@/data/recent-orders";
import { getCustomers } from "@/lib/dataTransfer";
import { useQuery } from "@tanstack/react-query";
import { BsThreeDotsVertical } from "react-icons/bs";

const CustomersPage = () => {
  const { data: customers } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  console.log(customers);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header title="Customers" />
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Address</span>
            <span className="hidden md:grid">Phone</span>
          </div>
          <ul>
            {RECENT_ORDERS.map((order, id) => (
              <li
                key={id}
                className="bg-gray-100 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <p>{order.name.first + " " + order.name.last}</p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {order.name.first}@gmail.com
                </p>
                <p className="hidden md:flex ">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
