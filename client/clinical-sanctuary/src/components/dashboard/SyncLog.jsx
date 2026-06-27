import { syncLogs } from "../../data/syncLog";
import SyncLogItem from "./SyncLogItem";

export default function SyncLog() {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Offline Sync Log
          </h2>

          <p className="text-sm text-gray-500">
            Recent synchronization activity
          </p>
        </div>

        <button className="px-4 py-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition">
          Retry Sync
        </button>
      </div>

      <div className="space-y-1">
        {syncLogs.map((log) => (
          <SyncLogItem
            key={log.id}
            log={log}
          />
        ))}
      </div>
    </section>
  );
}