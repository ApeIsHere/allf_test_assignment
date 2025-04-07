export const formatPhone = (phone) => {
  if (!phone) return "-";
  const countryCode = "+1";
  const areaCode = phone.slice(0, 3);
  const firstPart = phone.slice(3, 6);
  const secondPart = phone.slice(6, 10);
  return `${countryCode} ${areaCode} ${firstPart} ${secondPart}`;
};
