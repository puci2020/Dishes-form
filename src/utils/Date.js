const timeToString = (time) => {
  let hour = time?.getHours();
  let minutes = time?.getMinutes();
  let seconds = time?.getSeconds();

  if (hour < 10) hour = `0${hour}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return `${hour}:${minutes}:${seconds}`;
};

export default timeToString;
