import Header from "@/components/Header";
import BarChart from "@/components/bar-chart";
import RecentOrders from "@/components/recent-orders";
import TopCards from "@/components/top-cards";

const HomePage = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header title="Dashboard" />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  );
};

export default HomePage;
