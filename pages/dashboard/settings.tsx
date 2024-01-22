import Header from "@/components/Header";
import { RECENT_ORDERS } from "@/data/recent-orders";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

const SettingsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header title="Settings" />
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          Settings will be here
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
