function getTime(time) {
  const hours = parseInt (time / 3600);
  const minutes = parseInt((time % 3600) / 60);
  const second = time % 60;
  return `${hours} Hour ${minutes} Minute ${second} seconds ago`
}

console.log(getTime(7865));