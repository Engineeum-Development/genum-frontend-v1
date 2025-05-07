export function getInitials(str: string) {
  if (!str) return;

  let initials = "";
  const splittedArr = str.split(" ");
  if (splittedArr.length === 1) {
    initials = splittedArr[0][0];
    return initials.toUpperCase();
  }
  initials = `${splittedArr[0][0]}${splittedArr[1][0]}`;
  return initials.toUpperCase();
}
