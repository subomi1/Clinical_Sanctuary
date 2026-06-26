import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  ClipboardPlus,
} from "lucide-react";

const navItemStyles = `
flex items-center
justify-center lg:justify-start
gap-3

px-3 lg:px-4
py-3

rounded-xl
relative

text-black
bg-transparent

transition-all
duration-300
ease-[cubic-bezier(0.4,0,0.2,1)]

hover:text-[#2563EB]
hover:bg-white
hover:shadow-sm

before:content-['']
before:absolute
before:left-0
before:w-1
before:h-5 lg:before:h-6
before:bg-[#2563EB]
before:rounded-r-full

before:opacity-0
before:-translate-x-2

before:transition-all
before:duration-300
before:ease-[cubic-bezier(0.4,0,0.2,1)]

hover:before:opacity-100
hover:before:translate-x-0
`;

const navItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "Patients",
    icon: Users,
    path: "/patients",
  },
  {
    name: "Encounters",
    icon: ClipboardPlus,
    path: "/encounters",
  },
  {
    name: "Reports",
    icon: BarChart3,
    path: "/reports",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-20 lg:w-64 h-screen bg-[#F2F4F6] text-black flex flex-col px-3 lg:px-5 py-6 transition-all duration-300">

      {/* Logo */}
      <div className="mt-8 mb-2 flex flex-col items-center">

        {/* Temporary Logo */}
        <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-xl shadow-sm">
          S
        </div>

        {/* Hidden on tablet */}
        <div className="hidden lg:block mt-3">
          <h2 className="font-['Manrope'] font-bold text-slate-900 leading-tight">
            Sanctuary Health
          </h2>

          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            Central Clinic
          </p>
        </div>

      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 mt-4 lg:mt-6 font-[Inter]">

        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={navItemStyles}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />

              <span className="hidden lg:inline">
                {item.name}
              </span>
            </button>
          );
        })}

      </nav>

    </aside>
  );
}