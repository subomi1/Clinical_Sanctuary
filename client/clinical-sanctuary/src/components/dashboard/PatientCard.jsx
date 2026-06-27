import { Clock3, Stethoscope } from "lucide-react";

const statusStyles = {
  Waiting: "bg-yellow-100 text-yellow-700",
  Ready: "bg-blue-100 text-blue-700",
  "In Consultation": "bg-green-100 text-green-700",
};

export default function PatientCard({ patient }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">

      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-900">
            {patient.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {patient.time}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[patient.status]}`}
        >
          {patient.status}
        </span>
      </div>

      <div className="space-y-2 text-sm">

        <div className="flex items-center gap-2 text-gray-600">
          <Clock3 size={16} />
          <span>{patient.waiting}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Stethoscope size={16} />
          <span>{patient.reason}</span>
        </div>

      </div>

      <button className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
        View Patient
      </button>

    </div>
  );
}