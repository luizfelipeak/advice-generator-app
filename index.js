const url = "https://api.adviceslip.com/advice";
let connection, data;

const adviceId = document.getElementById("advice-id");
const advice = document.getElementById("advice");
const adviceBtn = document.getElementById("advice-btn");

const loading = document.getElementById("loading");
const card = document.getElementById("card");
let adviceBtnHadFocus = false;

connectAPI(url);

async function connectAPI(url) {
  // ----- API -----
    connection = await fetch(url);
    data = await connection.json();

    setTimeout(() => {
      adviceId.innerHTML = data.slip.id;
      advice.innerHTML = data.slip.advice;
      showCard();
      
      if(adviceBtnHadFocus)
        adviceBtn.focus();
  }, 2000);
  // ---------------
}

async function showCard() {
  loading.style.display = "none";
  card.style.display = "grid";
}

async function hideCard() {
  loading.style.display = "initial";
  card.style.display = "none";
}

adviceBtn.addEventListener("click", () => {
  adviceBtnHadFocus = true;

  hideCard();
  connectAPI(url);
});