import { Users, ArrowUpDown } from "lucide-react";

export default function PatientTableHeader() {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />

          <h2 className="text-xl font-bold text-slate-900">
            Patient Records
          </h2>
        </div>

        <p className="mt-1 text-sm text-slate-500">
          1,248 registered patients
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
        <ArrowUpDown className="h-4 w-4" />
        Sort
      </button>
    </div>
  );
}