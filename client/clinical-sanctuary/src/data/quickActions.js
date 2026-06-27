import {
  UserPlus,
  ClipboardPlus,
  Users,
  BarChart3,
} from "lucide-react";

export const quickActions = [
  {
    title: "Check In",
    subtitle: "Add patient to queue",
    icon: UserPlus,
    color: "blue",
  },
  {
    title: "Encounter",
    subtitle: "Start consultation",
    icon: ClipboardPlus,
    color: "green",
  },
  {
    title: "Register",
    subtitle: "Create patient record",
    icon: Users,
    color: "purple",
  },
  {
    title: "Reports",
    subtitle: "Clinic analytics",
    icon: BarChart3,
    color: "orange",
  },
];