import patients from "../../data/patients";

import PatientTableHeader from "./PatientTableHeader";
import PatientRow from "./PatientRow";
import PatientPagination from "./PatientPagination";

export default function PatientTable({ onSelectPatient }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

      <PatientTableHeader />

      <div>
        {patients.map((patient) => (
          <PatientRow
            key={patient.id}
            patient={patient}
            onClick={() => onSelectPatient(patient)}
          />
        ))}
      </div>

      <PatientPagination />

    </section>
  );
}