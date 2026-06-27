import MetricCard from "./MetricCard";
import { clinicMetrics } from "../../data/clinicMetrics";

export default function ClinicOverview() {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Clinic Overview
        </h2>

        <p className="text-sm text-gray-500">
          Today's operational performance
        </p>
      </div>

      <div className="space-y-4">
        {clinicMetrics.map((metric) => (
          <MetricCard
            key={metric.id}
            metric={metric}
          />
        ))}
      </div>
    </section>
  );
}