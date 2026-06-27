const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  padding = "md",
  hover = false,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        ${paddings[padding]}
        ${
          hover
            ? "cursor-pointer hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}