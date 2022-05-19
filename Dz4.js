let getPrice = function(time, isQuickly) {
  let rate = 1500;
  if (isQuickly) {
    time /= 2;
    rate *= 2.5;
  }
  if (time > 150) {
    rate -= 250;
  }
  return time * rate;
}
console.log(getPrice(200, true))
