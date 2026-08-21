 const botoes = document.querySelectorAll("button");
        
        botoes.forEach(botao => {
            botao.addEventListener("click", function () {
                const span = botao.querySelector("span");
                let valor = Number(span.textContent);
                
                // Verifica se o botão já foi clicado antes usando dataset
                const jaClicou = botao.dataset.clicado === "true";

                if (!jaClicou) {
                    // Se NÃO clicou ainda: soma 1 e marca como clicado
                    span.textContent = valor + 1;
                    botao.dataset.clicado = "true";
                    botao.classList.add("ativo");
                } else {
                    // Se JÁ clicou antes: subtrai 1 e desmarca
                    span.textContent = valor - 1;
                    botao.dataset.clicado = "false";
                    botao.classList.remove("ativo");
                }
            });
        });