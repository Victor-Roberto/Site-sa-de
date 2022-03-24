window.onload = () => {
  let button = document.querySelector("#btn");

  button.addEventListener("click", calcularIMC);
};

function calcularIMC() {


  let altura = parseInt(document
          .querySelector("#altura").value);

  let peso = parseInt(document
          .querySelector("#peso").value);

  let result = document.querySelector("#result");

  if (altura === "" || isNaN(altura)) 
      result.innerHTML = "Digite uma altura válida!";

  else if (peso === "" || isNaN(peso)) 
      result.innerHTML = "Digite um peso valido!";

  else {

      let imc = (peso / ((altura * altura) 
                          / 10000)).toFixed(2);

      if (imc < 18.6) result.innerHTML =
          `Abaixo do peso : <span>${imc}</span>`;

      else if (imc >= 18.6 && imc < 24.9) 
          result.innerHTML = 
              `Normal : <span>${imc}</span>`;

      else result.innerHTML =
          `Sobrepeso : <span>${imc}</span>`;
  }
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Cadastro realizado com sucesso!');
    }

}
