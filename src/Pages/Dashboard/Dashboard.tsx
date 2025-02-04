import { useState } from "react";
import { Home, Inbox, Calendar, Search, Settings, Menu } from "lucide-react";
import { cn } from "@/lib/utils"; // Utility for className merging
import DashboardHome from "./DashobardHome";

const menuItems = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={cn(
          "h-screen bg-[#F06392] text-white transition-all duration-300",
          isOpen ? "w-64 p-4" : "w-16 p-2"
        )}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 p-2 mb-6 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          <Menu size={24} />
          {isOpen && <span className="text-lg font-semibold">Dashboard</span>}
        </button>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition"
            >
              <item.icon size={24} />
              {isOpen && <span>{item.title}</span>}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 pt-20">
        <h1 className="text-2xl font-bold">Dashboard Content</h1>

        <DashboardHome />
      </div>
    </div>
  );
}
