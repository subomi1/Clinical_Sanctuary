import { LayoutDashboard, Users, Settings } from "lucide-react";
export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#F2F4F6] text-black flex flex-col p-4">
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 class="font-['Manrope'] font-bold text-slate-900 leading-tight">
          Sanctuary Health
        </h2>
        <p class="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
          Central Clinic
        </p>
      </div>

      <nav className="flex flex-col gap-2 mt-10 font-[Inter]">
        <button
          to="/"
          className="flex items-center gap-3
px-4 py-3
rounded-xl
relative

text-black
bg-transparent

transition-all
duration-300
ease-[cubic-bezier(0.4,0,0.2,1)]

hover:text-[#2563EB]
hover:bg-white
hover:shadow-md

before:content-['']
before:absolute
before:left-0
before:w-1
before:h-6
before:bg-[#2563EB]
before:rounded-r-full

before:opacity-0
before:-translate-x-2

before:transition-all
before:duration-300
before:ease-[cubic-bezier(0.4,0,0.2,1)]

hover:before:opacity-100
hover:before:translate-x-0"
        >
          <LayoutDashboard className="w-4.5" />
          Dashboard
        </button>
        <button
          to="/"
          className="flex items-center gap-3
px-4 py-3
rounded-xl
relative

text-black
bg-transparent

transition-all
duration-300
ease-[cubic-bezier(0.4,0,0.2,1)]

hover:text-[#2563EB]
hover:bg-white
hover:shadow-md

before:content-['']
before:absolute
before:left-0
before:w-1
before:h-6
before:bg-[#2563EB]
before:rounded-r-full

before:opacity-0
before:-translate-x-2

before:transition-all
before:duration-300
before:ease-[cubic-bezier(0.4,0,0.2,1)]

hover:before:opacity-100
hover:before:translate-x-0"
        >
          <Users className="w-4.5" />
          Patients
        </button>
        <button
          to="/"
          className="flex items-center gap-3
px-4 py-3
rounded-xl
relative

text-black
bg-transparent

transition-all
duration-300
ease-[cubic-bezier(0.4,0,0.2,1)]

hover:text-[#2563EB]
hover:bg-white
hover:shadow-md

before:content-['']
before:absolute
before:left-0
before:w-1
before:h-6
before:bg-[#2563EB]
before:rounded-r-full

before:opacity-0
before:-translate-x-2

before:transition-all
before:duration-300
before:ease-[cubic-bezier(0.4,0,0.2,1)]

hover:before:opacity-100
hover:before:translate-x-0"
        >
          <Users className="w-4.5" />
          Encounters
        </button>
        <button
          to="/"
          className="flex items-center gap-3
px-4 py-3
rounded-xl
relative

text-black
bg-transparent

transition-all
duration-300
ease-[cubic-bezier(0.4,0,0.2,1)]

hover:text-[#2563EB]
hover:bg-white
hover:shadow-md

before:content-['']
before:absolute
before:left-0
before:w-1
before:h-6
before:bg-[#2563EB]
before:rounded-r-full

before:opacity-0
before:-translate-x-2

before:transition-all
before:duration-300
before:ease-[cubic-bezier(0.4,0,0.2,1)]

hover:before:opacity-100
hover:before:translate-x-0"
        >
          <Users className="w-4.5" />
          Reports
        </button>
        <button
          to="/"
          className="flex items-center gap-3
px-4 py-3
rounded-xl
relative

text-black
bg-transparent

transition-all
duration-300
ease-[cubic-bezier(0.4,0,0.2,1)]

hover:text-[#2563EB]
hover:bg-white
hover:shadow-md

before:content-['']
before:absolute
before:left-0
before:w-1
before:h-6
before:bg-[#2563EB]
before:rounded-r-full

before:opacity-0
before:-translate-x-2

before:transition-all
before:duration-300
before:ease-[cubic-bezier(0.4,0,0.2,1)]

hover:before:opacity-100
hover:before:translate-x-0"
        >
          <Settings className="w-4.5" />
          Settings
        </button>
      </nav>
    </div>
  );
}
