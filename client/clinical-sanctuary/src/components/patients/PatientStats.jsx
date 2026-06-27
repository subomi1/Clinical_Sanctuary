import {
  Users,
  UserCheck,
  UserPlus,
  CalendarClock,
  TriangleAlert,
} from "lucide-react";

const stats = [
  {
    title: "Total Patients",
    value: "1,248",
    change: "+12 this week",
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Seen Today",
    value: "56",
    change: "+8 from yesterday",
    icon: UserCheck,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "New Registrations",
    value: "14",
    change: "+3 today",
    icon: UserPlus,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Follow-ups Due",
    value: "18",
    change: "4 overdue",
    icon: CalendarClock,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Critical Cases",
    value: "3",
    change: "Needs attention",
    icon: TriangleAlert,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
];

export default function PatientStats() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              bg-white
              rounded-2xl
              p-5
              shadow-sm
              border
              border-slate-200
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h2>

                <p className="mt-3 text-sm text-slate-500">
                  {stat.change}
                </p>
              </div>

              <div
                className={`
                  h-12
                  w-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${stat.iconBg}
                `}
              >
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}