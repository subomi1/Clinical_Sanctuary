const colors = {
  info: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  success: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  warning: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
  danger: {
    bg: "bg-red-100",
    text: "text-red-600",
  },
};

export default function NotificationItem({ notification }) {
  const Icon = notification.icon;

  const color = colors[notification.type];

  return (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition duration-200">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center ${color.bg}`}
      >
        <Icon className={color.text} size={20} />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start gap-3">
          <h3 className="font-semibold text-gray-900">
            {notification.title}
          </h3>

          <span className="text-xs text-gray-400 whitespace-nowrap">
            {notification.time}
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          {notification.description}
        </p>
      </div>
    </div>
  );
}