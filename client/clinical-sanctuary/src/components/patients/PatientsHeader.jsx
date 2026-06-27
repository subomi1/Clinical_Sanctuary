import {
  Plus,
  Upload,
  Download,
} from "lucide-react";

export default function PatientsHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Patient Management
        </h1>

        <p className="mt-2 text-slate-500">
          Manage patient records, registrations, appointments and medical
          histories.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-wrap items-center gap-3">

        <button
          className="
          flex items-center gap-2
          rounded-xl
          border border-slate-200
          bg-white
          px-4 py-2.5
          text-sm font-medium
          text-slate-700
          shadow-sm
          transition-all
          duration-200
          hover:bg-slate-50
          hover:border-slate-300
          "
        >
          <Upload className="h-4 w-4" />
          Import
        </button>

        <button
          className="
          flex items-center gap-2
          rounded-xl
          border border-slate-200
          bg-white
          px-4 py-2.5
          text-sm font-medium
          text-slate-700
          shadow-sm
          transition-all
          duration-200
          hover:bg-slate-50
          hover:border-slate-300
          "
        >
          <Download className="h-4 w-4" />
          Export
        </button>

        <button
          className="
          flex items-center gap-2
          rounded-xl
          bg-[#2563EB]
          px-5 py-2.5
          text-sm
          font-semibold
          text-white
          shadow-md
          transition-all
          duration-200
          hover:bg-blue-700
          hover:shadow-lg
          active:scale-95
          "
        >
          <Plus className="h-4 w-4" />
          Register Patient
        </button>

      </div>

    </div>
  );
}