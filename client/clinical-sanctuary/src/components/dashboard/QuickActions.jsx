import { quickActions } from "../../data/quickActions";
import ActionCard from "./ActionCard";

export default function QuickActions() {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Quick Actions
        </h2>

        <p className="text-sm text-gray-500">
          Frequently used clinic actions
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickActions.map((action) => (
          <ActionCard
            key={action.id}
            action={action}
          />
        ))}
      </div>
    </section>
  );
}