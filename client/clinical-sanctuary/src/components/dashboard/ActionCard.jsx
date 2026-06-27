export default function ActionCard({ action }) {
  const Icon = action.icon;

  return (
    <button
      className="
        w-full
        bg-white
        rounded-2xl
        border
        border-gray-200
        p-5
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        hover:border-blue-200
      "
    >
      <div
        className={`
          w-10
          h-10
          rounded-xl
          flex
          items-center
          justify-center
          mb-2
          ${action.color}
        `}
      >
        <Icon size={24} />
      </div>

      <h3 className="font-semibold text-gray-900">
        {action.title}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {action.description}
      </p>
    </button>
  );
}