const zeroFill = n => {
  return ('0' + n).slice(-2);
}
setInterval(() => {
  /** Time current */
  const now = new Date();
  const dateTime = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds()) + 's';
  document.getElementById('dateTimeCurrent').innerHTML = dateTime;

  /** Counter */
  const counter = () => { document.querySelector("#header-counter").style.setProperty("--number", 10000); };
  counter()
}, 0);
