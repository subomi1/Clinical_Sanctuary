import PatientsHeader from "../components/patients/PatientsHeader";
import PatientStats from "../components/patients/PatientStats";
import PatientFilters from "../components/patients/PatientFilters";
import PatientTable from "../components/patients/PatientTable";
import PatientDrawer from "../components/patients/PatientDrawer";

import { useState } from "react";

export default function Patients() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <main className="flex-1 overflow-y-auto bg-[#F8FAFC] p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        <PatientsHeader />

        <PatientStats />

        <PatientFilters />

        <PatientTable
          onSelectPatient={setSelectedPatient}
        />

      </div>

      <PatientDrawer
        patient={selectedPatient}
        onClose={() => setSelectedPatient(null)}
      />

    </main>
  );
}