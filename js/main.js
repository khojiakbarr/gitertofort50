const FormControl = document.querySelectorAll(".FormControl");

CHAT_ID = "-1002104534949";
TOKEN = "6779609754:AAGGILcPKAb2oqP3X6ijwabMR5j4Ig1_xDo";
URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const telefon = document.querySelectorAll(".telefon");

telefon.forEach((tel) => {
  tel.addEventListener("focus", (e) => {
    e.target.value = "+998";
  });
});

FormControl.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const [isim, nomer] = e.target;
    console.dir(isim.value);
    console.dir(nomer.value);
    let message = `<b>GIPERTO FORT</b>\n`;
    message += `<b>ism:</b>${isim.value}\n`;
    message += `<b>nomer:</b>${nomer.value}`;

    try {
      await axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      });
    } catch (err) {
      console.log(err);
    }
    this.reset();
  });
});

//? sekundamer

const soatEl = document.querySelectorAll(".soat");
const minutEl = document.querySelectorAll(".minut");
const sekuntEl = document.querySelectorAll(".sekunt");

let soat = 4;
let minut = 10;
let sekunt = 28;
soat = "0" + 4;
setInterval(() => {
  sekunt--;
  if (sekunt < 10 && sekunt > 0) {
    sekunt = "0" + sekunt;
  }
  sekuntEl[0].innerHTML = sekunt;
  minutEl[0].innerHTML = minut;
  soatEl[0].innerHTML = soat;

  if (sekunt < 0) {
    minut--;
    sekunt = 59;
    if (minut < 10) {
      minut = "0" + minut;
    }
    sekuntEl[0].innerHTML = sekunt;
    minutEl[0].innerHTML = minut;
    soatEl[0].innerHTML = soat;
  }
  if (minut < 0) {
    soat--;
    minut = 59;
    if (soat < 10) {
      soat = "0" + soat;
    }
    sekuntEl[0].innerHTML = sekunt;
    minutEl[0].innerHTML = minut;
    soatEl[0].innerHTML = soat;
  }
  if (soat == 0) {
    sekunt = 0;
    minut = 0;
    soat = 0;
    sekuntEl[0].innerHTML = sekunt;
    minutEl[0].innerHTML = minut;
    soatEl[0].innerHTML = soat;
  }
}, 1000);

setInterval(() => {
  sekunt--;
  if (sekunt < 10 && sekunt > 0) {
    sekunt = "0" + sekunt;
  }
  sekuntEl[1].innerHTML = sekunt;
  minutEl[1].innerHTML = minut;
  soatEl[1].innerHTML = soat;

  if (sekunt < 0) {
    minut--;
    sekunt = 59;
    if (minut < 10) {
      minut = "0" + minut;
    }
    sekuntEl[1].innerHTML = sekunt;
    minutEl[1].innerHTML = minut;
    soatEl[1].innerHTML = soat;
  }
  if (minut < 0) {
    soat--;
    minut = 59;
    if (soat < 10) {
      soat = "0" + soat;
    }
    sekuntEl[1].innerHTML = sekunt;
    minutEl[1].innerHTML = minut;
    soatEl[1].innerHTML = soat;
  }
  if (soat == 0) {
    sekunt = 0;
    minut = 0;
    soat = 0;
    sekuntEl[1].innerHTML = sekunt;
    minutEl[1].innerHTML = minut;
    soatEl[1].innerHTML = soat;
  }
}, 1000);
setInterval(() => {
  sekunt--;
  if (sekunt < 10 && sekunt > 0) {
    sekunt = "0" + sekunt;
  }
  sekuntEl[2].innerHTML = sekunt;
  minutEl[2].innerHTML = minut;
  soatEl[2].innerHTML = soat;

  if (sekunt < 0) {
    minut--;
    sekunt = 59;
    if (minut < 10) {
      minut = "0" + minut;
    }
    sekuntEl[2].innerHTML = sekunt;
    minutEl[2].innerHTML = minut;
    soatEl[2].innerHTML = soat;
  }
  if (minut < 0) {
    soat--;
    minut = 59;
    if (soat < 10) {
      soat = "0" + soat;
    }
    sekuntEl[2].innerHTML = sekunt;
    minutEl[2].innerHTML = minut;
    soatEl[2].innerHTML = soat;
  }
  if (soat == 0) {
    sekunt = 0;
    minut = 0;
    soat = 0;
    sekuntEl[2].innerHTML = sekunt;
    minutEl[2].innerHTML = minut;
    soatEl[2].innerHTML = soat;
  }
}, 1000);
