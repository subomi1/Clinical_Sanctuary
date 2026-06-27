import QueueRow from "./QueueRow";

export default function QueueTable({ patients }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b border-gray-200">
          <tr className="text-left text-sm text-gray-500">
            <th className="py-3">Patient</th>
            <th className="py-3">Time</th>
            <th className="py-3">Waiting</th>
            <th className="py-3">Reason</th>
            <th className="py-3">Status</th>
            <th className="py-3 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <QueueRow
              key={patient.id}
              patient={patient}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}