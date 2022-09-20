const ad = prompt("lütfen adınızı giriniz");

   const adiniz = document.querySelector("#adiniz");

  adiniz.innerHTML = ` Merhaba ${ad} Hoşgeldiniz!`;

  const saat = document.querySelector("#saat");

  let time = function () {
    let weekday = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let days = new Date().getDay();

    saat.innerHTML = ` Tarih : ${weekday} - ${
      month + 1
    } - ${year}  /   Saat : ${hour} - ${minute} - ${second}`;
  };
  setInterval(time, 1000);


