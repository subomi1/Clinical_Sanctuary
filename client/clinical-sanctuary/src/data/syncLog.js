import {
  CheckCircle2,
  CloudUpload,
  Save,
  AlertCircle,
} from "lucide-react";

export const syncLogs = [
  {
    id: 1,
    icon: CheckCircle2,
    title: "Patient record synced",
    description: "Marcus Thorne • 09:42 AM",
    color: "text-green-600",
  },
  {
    id: 2,
    icon: CloudUpload,
    title: "4 records uploaded",
    description: "09:38 AM",
    color: "text-blue-600",
  },
  {
    id: 3,
    icon: Save,
    title: "3 records saved locally",
    description: "Waiting for internet",
    color: "text-amber-600",
  },
  {
    id: 4,
    icon: AlertCircle,
    title: "Sync retry scheduled",
    description: "Next attempt in 30 sec",
    color: "text-red-600",
  },
];