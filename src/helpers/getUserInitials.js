export const getUserInitials = (firstName, lastName) => {
  if (!firstName || !lastName) return "";

  const inistials = `${firstName.charAt(0).toUpperCase()}${lastName
    .charAt(0)
    .toUpperCase()}`;
    return inistials
};
