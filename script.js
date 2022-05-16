const telegramToken = "5045556178:AAHPj4pmN_1nhL_BvYmDpmra2sEcOYUuDh0";
const chatID = -710224452;
let userName, phoneNumber, question, message;

const ready = function () {
  userName = document.getElementById("name").value;
  phoneNumber = document.getElementById("tel").value;
  question = document.getElementById("question").value;

  message = `Имя: ${userName}\nНомер: ${phoneNumber}\nВопрос: ${question}\nОткуда: ${
    document.querySelector(".promo_flag") ? "С рекламы" : "Из Instagram"
  }`;
};

const sender = function () {
  ready();
  console.log(document.querySelector(".promo_flag"));
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegramToken + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chatID,
      text: message,
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  document.getElementById("name").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("question").value = "";

  return false;
};

const onSubmit = () => {
  alert("Благодарим за запрос. Мы свяжемся с Вами в самое ближайшее время.");
};
