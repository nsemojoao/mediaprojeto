const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // 1. Receber os dados e atribuir às variáveis
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    // 2. Fazer o cálculo
    let media = (nota1+nota2+nota3)/(3);

    // 3. Mostrar os resultados na página
    document.getElementById("nota1Resultado").textContent =
        "Primeira nota " + nota1 + " val";

    document.getElementById("nota2Resultado").textContent =
        "Segunda nota " + nota2 + " val";

    document.getElementById("nota3Resultado").textContent =
        "Terceira nota " + nota3 + " val";

    document.getElementById("mediaResultado").textContent =
        "Média " + media.toFixed(1) + " val";

    document.getElementById("resultado").hidden = false;
})