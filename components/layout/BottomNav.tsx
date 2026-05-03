"use client";

import { Home, Calendar, MessageCircle, BookOpen, Settings } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Calendar, label: "Events" },
  { icon: MessageCircle, label: "Messages" },
  { icon: BookOpen, label: "Sermons" },
  { icon: Settings, label: "Settings" },
];

const BottomNav = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 max-w-md mx-auto">
      <div className="flex justify-around items-center py-2 px-1">
        {navItems.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActive(i)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
              active === i
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-semibold">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
