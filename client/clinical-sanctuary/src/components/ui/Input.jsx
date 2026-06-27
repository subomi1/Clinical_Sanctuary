export default function Input({
  className = "",
  ...props
}) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-xl
        border
        border-slate-300
        bg-white
        px-4
        py-2.5
        text-sm
        outline-none
        transition
        placeholder:text-slate-400
        focus:border-blue-500
        focus:ring-4
        focus:ring-blue-100
        ${className}
      `}
    />
  );
}