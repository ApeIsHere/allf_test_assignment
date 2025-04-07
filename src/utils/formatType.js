export const formatType = (type) => {
  if (!type || type.length === 0) return "-";
  return type
    .map((t) => {
      return t
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    })
    .join(", ");
};
