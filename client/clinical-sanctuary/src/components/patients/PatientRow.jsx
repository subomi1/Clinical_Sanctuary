import {
  Phone,
  Stethoscope,
  Calendar,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

const statusStyles = {
  Active: {
    strip: "bg-green-500",
    badge: "bg-green-100 text-green-700",
  },
  Waiting: {
    strip: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
  },
  Critical: {
    strip: "bg-red-500",
    badge: "bg-red-100 text-red-700",
  },
  Scheduled: {
    strip: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
  Discharged: {
    strip: "bg-slate-500",
    badge: "bg-slate-100 text-slate-700",
  },
};

export default function PatientRow({ patient, onClick }) {
  const status = statusStyles[patient.status];

  const initials = patient.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        flex
        w-full
        overflow-hidden
        rounded-none
        border-b
        border-slate-200
        bg-white
        text-left
        transition-all
        duration-300
        hover:bg-slate-50
      "
    >