let container = document.querySelector(".container");
let progressBar = document.querySelector("#idProgressBar");

// EVENTO DE TECLADO
document.addEventListener("keyup", function (e) {
    let senha = document.querySelector("#idSenha").value;
    let pontosTamanho = funcTamanho(senha);
    let pontosFinal = funcEspeciais(senha, pontosTamanho);

    console.log(`Tamanho: ${pontosTamanho} | Especiais: ${pontosFinal}`);
    console.log(`Caracteres: ${senha.length}`);

    aumentarBarra(pontosFinal * 10);

    if (pontosFinal <= 5) {
        progressBar.classList.remove("forte");
        progressBar.classList.remove("moderada");
        progressBar.classList.add("fraca");
    }
    else if (pontosFinal > 5 && pontosFinal < 9) {
        progressBar.classList.remove("fraca");
        progressBar.classList.remove("forte");
        progressBar.classList.add("moderada");
    }
    else if (pontosFinal >= 9) {
        progressBar.classList.remove("moderada");
        progressBar.classList.remove("fraca");
        progressBar.classList.add("forte");

    }
});

// PONTUAÇÃO POR TAMANHO DA SENHA
function funcTamanho(senha) {
    let i = 0;

    if (senha.length > 1 && senha.length <= 6) i = 1; // 1 ponto
    else if (senha.length > 6 && senha.length <= 9) i = 2; // 2 pontos
    else if (senha.length > 9 && senha.length <= 11) i = 3; // 3 pontos
    else if (senha.length > 11 && senha.length <= 13) i = 4; // 4 pontos
    else if (senha.length > 13) i = 5; // 5 pontos

    return i;
}

// PONTUAÇÃO POR TIPOS DE CARACTERES
function funcEspeciais(senha, pontuacao) {
    let i = pontuacao;

    if (/[a-z]/.test(senha)) i++;
    if (/[A-Z]/.test(senha)) i++;
    if (/[0-9]/.test(senha)) i++;
    if (/[!@#$%&*()_+]/.test(senha)) i += 2;

    return i;
}

// AUMENTANDO A BARRA DE PROGRESSO
function aumentarBarra(tamanho) {
    let barra = document.querySelector("#idProgressBar");
    barra.value = tamanho;
}

// MOSTRANDO SENHA AO CLICAR NO BOTÃO
var botaoMostrar = document.querySelector("#idBotao");
botaoMostrar.onclick = function mostrarSenha() {
    let senha = document.querySelector("#idSenha");
    let btn = document.querySelector("#idBotao");

    if (senha.type === "password") {
        senha.type = "text";
        btn.value = "Ocultar";
    }
    else {
        senha.type = "password";
        btn.value = "Mostrar";
    }
}