export default function MetricCard({ metric }) {
  return (
    <div className="flex flex-col">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {metric.title}
      </p>

      <div className="flex items-end gap-1 mt-2">
        <span className="text-3xl font-bold text-gray-900">
          {metric.value}
        </span>

        {metric.unit && (
          <span className="text-sm text-gray-500 mb-1">
            {metric.unit}
          </span>
        )}
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
        <div
          className={`h-full rounded-full ${metric.color}`}
          style={{ width: `${metric.progress}%` }}
        />
      </div>
    </div>
  );
}