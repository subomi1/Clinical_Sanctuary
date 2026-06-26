import { useState } from "react";
import { Search, Bell, HelpCircle, CloudCheck } from "lucide-react";

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full h-16 px-4 md:px-6 lg:px-8 bg-[#f7f9fb]/80 backdrop-blur-md shadow-sm shadow-blue-900/5 flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center gap-3 md:gap-5 lg:gap-8">

        {/* Search */}
        <div
          className="
            hidden md:flex
            items-center
            bg-slate-100
            px-4 py-2
            rounded-full

            w-56
            lg:w-72
            xl:w-96

            transition-all
            focus-within:ring-2
            focus-within:ring-blue-500/20
          "
        >
          <Search className="w-4 h-4 text-slate-400 mr-2" />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patients..."
            className="bg-transparent w-full border-none outline-none text-sm placeholder:text-slate-400 text-slate-800"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-4 lg:gap-6">

        {/* Sync Status */}
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-600">

          <CloudCheck className="w-4 h-4" />

          <span className="hidden xl:inline">
            Online • All data synced
          </span>

        </div>

        {/* Notification */}
        <button
          aria-label="Notifications"
          className="p-2 text-slate-500 hover:bg-slate-100 transition-colors rounded-full"
        >
          <Bell className="w-5 h-5" />
        </button>

        {/* Help */}
        <button
          aria-label="Help"
          className="p-1 text-slate-500 hover:bg-slate-100 transition-colors rounded-full"
        >
          <HelpCircle className="w-5 h-5" />
        </button>

        {/* Divider */}
        <div className="hidden md:block h-8 w-px bg-slate-200" />

        {/* Save Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 lg:px-5 py-2 text-xs font-medium transition-all duration-200 active:scale-95 shadow-sm flex items-center justify-center gap-2">

          <CloudCheck className="w-4 h-4 lg:hidden" />

          <span className="hidden lg:inline">
            Save & Sync
          </span>

        </button>

        {/* Avatar */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUp4ZFHs33-wv13x-U-GhFT0_KjTGTIQSOrVQJY_-RgXbrHneeiblDirlgMwuA7r8Dx-jjtCPYmzKMhCjeDYnr_cH0wh9ssXgYIgMHmURo4uNN0McGyoLO0ORfB-Km7kiyz_YwTUrixOADUyUYzvkVEiOThXaipLiFasK_i5Yw4of8hGawsjqv3p16FFoNojZMhkaEHdTy7o9Drj1bl-AYTthT7zWAWUsQozm89_qsxD74ct5BPuJ7AYd9P4-zaS7zBvBqwn0PBg"
          alt="Doctor profile"
          className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover ring-2 ring-white shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
        />

      </div>
    </header>
  );
}