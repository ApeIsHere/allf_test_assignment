export const validateName = (name) => {
  return typeof name === "string" && name.trim().length > 0;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[0-9\s\-()]{7,}$/;
  return phoneRegex.test(phone) && phone.length === 11;
};

export const validateImageFile = (file) => {
  if (!file) return false;
  const isImage = file.type.startsWith("image/");
  const isUnder2MB = file.size <= 2 * 1024 * 1024;
  return isImage && isUnder2MB;
};
