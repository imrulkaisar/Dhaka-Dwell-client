/**
 * Convert date to string
 * @param {Date} dateString
 * @param {boolean} isLong. Default false.
 * @returns Date in string formate
 */
function formatDateString(dateString, isLong = false) {
  let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };

  if (isLong) {
    options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
  }

  const formattedDate = new Date(dateString).toLocaleString("en-US", options);
  return formattedDate;
}

export default formatDateString;
