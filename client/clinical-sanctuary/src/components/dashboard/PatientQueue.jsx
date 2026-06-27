import QueueTable from "./QueueTable";
import PatientCardList from "./PatientCardList";
import PatientQueueHeader from "./PatientQueueHeader";
import { patients } from "../../data/dashboardData";

export default function PatientQueue() {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2 lg:p-6">
      <PatientQueueHeader />

      {/* Desktop */}
      <div className="hidden lg:block mt-6">
        <QueueTable patients={patients} />
      </div>

      {/* Mobile */}
      <div className="block lg:hidden mt-6">
        <PatientCardList patients={patients} />
      </div>
    </section>
  );
}