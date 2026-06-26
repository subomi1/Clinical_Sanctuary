export const stats = [
  {
    title: "Patients Today",
    value: "38",
    subtitle: "26 Completed • 12 Remaining",
    color: "blue",
    icon: "calendar",
  },
  {
    title: "Waiting Queue",
    value: "12",
    subtitle: "Average 18 mins",
    color: "orange",
    icon: "clock",
  },
  {
    title: "Offline Sync",
    value: "Synced",
    subtitle: "Last sync just now",
    color: "green",
    icon: "cloud",
  },
  {
    title: "Critical Alerts",
    value: "3",
    subtitle: "Marcus Thorne • Penicillin Allergy",
    color: "red",
    icon: "alert",
  },
];

export const patients = [
  {
    id: 1,
    name: "Marcus Thorne",
    age: 43,
    appointment: "9:00 AM",
    waiting: "14 min",
    reason: "Fever",
    doctor: "Dr. Sarah",
    status: "Waiting",
  },
  {
    id: 2,
    name: "Grace Okafor",
    age: 28,
    appointment: "9:30 AM",
    waiting: "Checked In",
    reason: "Prenatal",
    doctor: "Dr. James",
    status: "Ready",
  },
  {
    id: 3,
    name: "Samuel Bello",
    age: 51,
    appointment: "10:00 AM",
    waiting: "-",
    reason: "Follow-up",
    doctor: "Dr. Sarah",
    status: "In Consultation",
  },
];

export const notifications = [
  {
    id: 1,
    title: "Lab results ready",
    patient: "Grace Okafor",
    time: "2 mins ago",
  },
  {
    id: 2,
    title: "Patient checked in",
    patient: "Marcus Thorne",
    time: "8 mins ago",
  },
  {
    id: 3,
    title: "3 records synced",
    patient: "",
    time: "12 mins ago",
  },
];