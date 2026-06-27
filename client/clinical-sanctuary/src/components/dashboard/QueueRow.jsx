const statusStyles = {
  Waiting: "bg-yellow-100 text-yellow-700",
  Ready: "bg-blue-100 text-blue-700",
  "In Consultation": "bg-green-100 text-green-700",
};

export default function QueueRow({ patient }) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
      <td className="py-4 font-medium text-gray-900">
        {patient.name}
      </td>

      <td className="py-4 text-gray-600">
        {patient.time}
      </td>

      <td className="py-4 text-gray-600">
        {patient.waiting}
      </td>

      <td className="py-4 text-gray-600">
        {patient.reason}
      </td>

      <td className="py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[patient.status]}`}
        >
          {patient.status}
        </span>
      </td>

      <td className="py-4 text-right">
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          View Patient
        </button>
      </td>
    </tr>
  );
}