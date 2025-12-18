let time = 03;

function startTimer() {
  document.getElementById("btn").disabled = true;
  let timer = setInterval(() => {
    document.getElementById("timer").innerText = "Tunggu " + time + " detik...";
    time--;

    if (time < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerText = "Silakan pilih server download";
      document.getElementById("links").classList.remove("hidden");
    }
  }, 1000);
}