const variants = {
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700",
  info: "bg-blue-100 text-blue-700",
  neutral: "bg-slate-100 text-slate-700",
};

const sizes = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1 text-sm",
};

export default function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className = "",
}) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}