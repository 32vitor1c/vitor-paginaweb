// Lógica dos botões de curtir/interagir
const botoes = document.querySelectorAll("main button");

botoes.forEach(botao => {
    botao.addEventListener("click", function () {
        const span = botao.querySelector("span");
        if (!span) return;
        
        let valor = Number(span.textContent);
        const jaClicou = botao.dataset.clicado === "true";

        if (!jaClicou) {
            span.textContent = valor + 1;
            botao.dataset.clicado = "true";
            botao.classList.add("ativo");
        } else {
            span.textContent = valor - 1;
            botao.dataset.clicado = "false";
            botao.classList.remove("ativo");
        }
    });
});

// Lógica do Modo Claro / Escuro
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const estaNoModoEscuro = document.body.classList.contains("dark-mode");
    
    // Atualiza o texto do botão
    btnTema.textContent = estaNoModoEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});