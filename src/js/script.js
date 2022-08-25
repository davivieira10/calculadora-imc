function calculate() {
  var height = document.getElementById("height").value / 100;
  var weight = document.getElementById("weight").value;

  var imc = weight / height ** 2;
  var text = "";
  if (imc < 18.5) {
    text = "Você está abaixo do peso!";
    document.getElementById("text_area").style.color = "red";
  } else if (imc < 24.9) {
    text = "Você está com o peso normal!";
    document.getElementById("text_area").style.color = "green";
  } else if (imc < 29.9) {
    text = "Você está com excesso de peso!";
    document.getElementById("text_area").style.color = "orange";
  } else if (imc < 34.9) {
    text = "Você está com Obesidade Classe I!";
    document.getElementById("text_area").style.color = "red";
  } else if (imc < 39.9) {
    text = "Você está com obesidade Classe II!";
    document.getElementById("text_area").style.color = "red";
  } else if (imc >= 40.0) {
    text = "Você está com obesidade Classe III!";
    document.getElementById("text_area").style.color = "red";
  }
  document.getElementById("text_area").innerText =
    "Seu imc é: " + imc + ". " + text;
}

function limpar() {
  document.getElementById("text_area").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("text_area").innerText = "";
  document.getElementById("height").focus();
}
