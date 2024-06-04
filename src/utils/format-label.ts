export const formatLabel = (val: number) => {
  let formattedValue = "";

  if (val >= 1000) {
    formattedValue = "+ " + Math.abs(val) / 1000 + "k";
  } else if (val <= -1000) {
    formattedValue = "- " + Math.abs(val) / 1000 + "k";
  }

  // Values lower than 1000
  else {
    formattedValue = val >= 0 ? "+ " : "- ";
    formattedValue += Math.abs(val);
  }

  return formattedValue;
};
