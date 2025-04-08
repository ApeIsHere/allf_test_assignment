export const formatPhone = (phone) => {
  if (!phone) return "-";
  const countryCode = phone.slice(0, 1);
  const areaCode = phone.slice(1, 4);
  const firstPart = phone.slice(4, 7);
  const secondPart = phone.slice(7, 11);
  return `+${countryCode} ${areaCode} ${firstPart} ${secondPart}`;
};
