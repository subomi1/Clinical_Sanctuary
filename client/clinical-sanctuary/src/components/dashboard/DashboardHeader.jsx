export default function DashboardHeader() {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
        Good Morning, Dr. Sarah Johnson
      </h1>

      <p className="text-slate-500 text-base md:text-lg">
        Tuesday, June 24, 2026
      </p>

      <div className="flex flex-wrap gap-3 mt-2">

        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          👥 26 Patients Scheduled
        </div>

        <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
          ⏳ 12 Waiting
        </div>

      </div>
    </section>
  );
}