import {
  TestTube2,
  TriangleAlert,
  CalendarClock,
  Pill,
} from "lucide-react";

export const notifications = [
  {
    id: 1,
    title: "Lab results available",
    description: "Marcus Thorne's blood work is ready for review.",
    time: "2 mins ago",
    type: "info",
    icon: TestTube2,
  },
  {
    id: 2,
    title: "Severe allergy alert",
    description: "Grace Okafor has a Penicillin allergy.",
    time: "15 mins ago",
    type: "danger",
    icon: TriangleAlert,
  },
  {
    id: 3,
    title: "Follow-up appointment",
    description: "Samuel Bello is due for a review today.",
    time: "35 mins ago",
    type: "warning",
    icon: CalendarClock,
  },
  {
    id: 4,
    title: "Prescription approved",
    description: "A new prescription has been finalized.",
    time: "1 hour ago",
    type: "success",
    icon: Pill,
  },
];