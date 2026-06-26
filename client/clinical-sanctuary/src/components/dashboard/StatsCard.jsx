import {
  CalendarDays,
  Clock3,
  Cloud,
  TriangleAlert,
} from "lucide-react";

const icons = {
  calendar: CalendarDays,
  clock: Clock3,
  cloud: Cloud,
  alert: TriangleAlert,
};

const colorStyles = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
  },
};

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  color,
}) {
  const Icon = icons[icon];

  const style = colorStyles[color];

  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      border-slate-200
      shadow-sm
      hover:shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      p-6
      "
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            {subtitle}
          </p>

        </div>

        <div
          className={`${style.bg} ${style.text} p-3 rounded-xl`}
        >
          <Icon size={24} />
        </div>

      </div>
    </div>
  );
}