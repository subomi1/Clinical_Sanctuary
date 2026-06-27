const sizes = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-lg",
  lg: "h-16 w-16 text-xl",
};

export default function Avatar({
  name,
  src,
  size = "md",
}) {
  const initials = name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`
          ${sizes[size]}
          rounded-2xl
          object-cover
        `}
      />
    );
  }

  return (
    <div
      className={`
        ${sizes[size]}
        flex
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-blue-500
        to-blue-700
        font-bold
        text-white
        shadow-md
      `}
    >
      {initials}
    </div>
  );
}