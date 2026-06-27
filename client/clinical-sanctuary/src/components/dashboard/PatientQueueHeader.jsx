import { Search } from "lucide-react";

export default function PatientQueueHeader() {
  return (
    <div className="space-y-5">

      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Today's Patient Queue
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Manage today's appointments and consultations.
          </p>
        </div>

        <button className="self-start md:self-auto text-sm font-medium text-blue-600 hover:text-blue-700 transition">
          View All
        </button>

      </div>

      {/* Search */}
      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search patient..."
          className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">

        <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
          All
        </button>

        <button className="px-4 py-2 rounded-full border border-gray-200 text-sm hover:bg-gray-100 transition">
          Waiting
        </button>

        <button className="px-4 py-2 rounded-full border border-gray-200 text-sm hover:bg-gray-100 transition">
          Ready
        </button>

        <button className="px-4 py-2 rounded-full border border-gray-200 text-sm hover:bg-gray-100 transition">
          In Consultation
        </button>

      </div>

    </div>
  );
}