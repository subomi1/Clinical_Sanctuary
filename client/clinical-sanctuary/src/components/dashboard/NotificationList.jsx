import NotificationItem from "./NotificationItem";
import { notifications } from "../../data/notifications";

export default function NotificationList() {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Notifications
        </h2>

        <p className="text-sm text-gray-500">
          Important updates from today's clinic activity.
        </p>
      </div>

      <div className="space-y-2">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
          />
        ))}
      </div>
    </section>
  );
}