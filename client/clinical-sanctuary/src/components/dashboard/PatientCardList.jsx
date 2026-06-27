import PatientCard from "./PatientCard";

export default function PatientCardList({ patients }) {
  return (
    <div className="space-y-4">
      {patients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
        />
      ))}
    </div>
  );
}