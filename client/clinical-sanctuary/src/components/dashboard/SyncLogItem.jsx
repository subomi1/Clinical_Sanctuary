export default function SyncLogItem({ log }) {
  const Icon = log.icon;

  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-none">
      <div
        className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${log.color}`}
      >
        <Icon size={18} />
      </div>

      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-900">
          {log.title}
        </h4>

        <p className="text-xs text-gray-500 mt-1">
          {log.description}
        </p>
      </div>
    </div>
  );
}