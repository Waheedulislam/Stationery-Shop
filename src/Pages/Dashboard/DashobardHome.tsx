import { Users, ShoppingCart, DollarSign, BarChart } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button className="bg-[#F06392] text-white px-4 py-2 rounded-lg hover:bg-[#d44b7d] transition">
          + Add New
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="1,245"
          icon={<Users size={32} />}
        />
        <StatCard
          title="Orders"
          value="450"
          icon={<ShoppingCart size={32} />}
        />
        <StatCard
          title="Revenue"
          value="$12,345"
          icon={<DollarSign size={32} />}
        />
        <StatCard
          title="Performance"
          value="85%"
          icon={<BarChart size={32} />}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <RecentOrders />
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}

/* Stats Card Component */
function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center p-5 bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="p-3 bg-[#F06392] text-white rounded-lg">{icon}</div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-lg font-bold">{value}</h3>
      </div>
    </div>
  );
}

/* Recent Orders Table */
function RecentOrders() {
  const orders = [
    { id: 1, customer: "John Doe", amount: "$120", status: "Completed" },
    { id: 2, customer: "Jane Smith", amount: "$250", status: "Pending" },
    { id: 3, customer: "Michael Lee", amount: "$80", status: "Cancelled" },
  ];

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200 text-gray-600 text-left">
          <th className="p-3">Customer</th>
          <th className="p-3">Amount</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} className="border-t">
            <td className="p-3">{order.customer}</td>
            <td className="p-3">{order.amount}</td>
            <td className="p-3">
              <span
                className={`px-2 py-1 text-sm rounded ${
                  order.status === "Completed"
                    ? "bg-green-200 text-green-800"
                    : order.status === "Pending"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* Quick Actions */
function QuickActions() {
  return (
    <div className="space-y-4">
      <button className="w-full bg-[#F06392] text-white py-2 rounded-lg hover:bg-[#d44b7d] transition">
        Create Invoice
      </button>
      <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition">
        Manage Users
      </button>
      <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition">
        View Reports
      </button>
    </div>
  );
}
