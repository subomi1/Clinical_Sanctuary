import {
  Search,
  Filter,
  ArrowUpDown,
  UserRound,
} from "lucide-react";

export default function PatientFilters() {
  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">

      {/* Top Row */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center">

        {/* Search */}
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search by patient name, hospital ID, phone or email..."
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              py-3
              pl-11
              pr-4
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:bg-white
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>

        {/* Register Button */}
        <button
          className="
            rounded-xl
            bg-blue-600
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            active:scale-95
          "
        >
          Register Patient
        </button>

      </div>

      {/* Bottom Row */}
      <div className="mt-5 flex flex-wrap gap-3">

        <select className="rounded-xl border border-slate-200 px-4 py-2.5 bg-white text-sm">
          <option>Status</option>
          <option>Active</option>
          <option>Waiting</option>
          <option>Critical</option>
        </select>

        <select className="rounded-xl border border-slate-200 px-4 py-2.5 bg-white text-sm">
          <option>Assigned Doctor</option>
          <option>Dr. Sarah</option>
          <option>Dr. James</option>
          <option>Dr. Michael</option>
        </select>

        <select className="rounded-xl border border-slate-200 px-4 py-2.5 bg-white text-sm">
          <option>Sort By</option>
          <option>Name</option>
          <option>Recent Visit</option>
          <option>Registration Date</option>
        </select>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            px-4
            py-2.5
            text-sm
            hover:bg-slate-50
            transition
          "
        >
          <Filter size={16} />
          Advanced Filters
        </button>

      </div>

    </section>
  );
}