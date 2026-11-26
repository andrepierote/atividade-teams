// Carregar depois de produtos.js para reutilizar o catálogo da loja.
(() => {
    "use strict";

    const CHAVE_FAVORITOS = "larts-favoritos";
    const area = document.querySelector(".favoritos");
    const mensagemVazia = area && area.querySelector(".favoritos__vazio");

    if (!area || !mensagemVazia) return;

    const lista = document.createElement("div");
    lista.id = "lista-favoritos";
    lista.className = "grade-produtos";
    lista.setAttribute("aria-label", "Produtos favoritos");

    const mensagemErro = document.createElement("p");
    mensagemErro.className = "favoritos__erro";
    mensagemErro.setAttribute("role", "alert");
    mensagemErro.hidden = true;

    area.insertBefore(lista, mensagemVazia);
    area.insertBefore(mensagemErro, mensagemVazia);

    function lerFavoritos() {
        let dados;

        try {
            dados = localStorage.getItem(CHAVE_FAVORITOS);
        } catch {
            throw new Error("Não foi possível acessar os favoritos salvos neste navegador.");
        }

        if (dados === null) return [];

        let favoritos;
        try {
            favoritos = JSON.parse(dados);
        } catch {
            throw new Error("A lista de favoritos está inválida e não pôde ser carregada.");
        }

        if (!Array.isArray(favoritos)) {
            throw new Error("A lista de favoritos está em um formato inválido.");
        }

        const idsDisponiveis = new Set(PRODUTOS.map(produto => String(produto.id)));
        return [...new Set(favoritos)]
            .filter(id => idsDisponiveis.has(String(id)));
    }

    function salvarFavoritos(favoritos) {
        try {
            localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
        } catch {
            throw new Error("Não foi possível atualizar os favoritos neste navegador.");
        }
    }

    function criarCard(produto) {
        const card = document.createElement("article");
        card.className = "card-favorito";

        const link = document.createElement("a");
        link.className = "card-favorito__link";
        link.href = `produto.html?id=${encodeURIComponent(produto.id)}`;

        const imagem = document.createElement("img");
        imagem.className = "card-favorito__imagem";
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;
        link.appendChild(imagem);

        const titulo = document.createElement("h2");
        titulo.className = "card-favorito__titulo";
        titulo.textContent = produto.nome;
        link.appendChild(titulo);

        const preco = document.createElement("p");
        preco.className = "card-favorito__preco";
        preco.textContent = formatarPreco(produto.preco);
        link.appendChild(preco);

        const botaoRemover = document.createElement("button");
        botaoRemover.type = "button";
        botaoRemover.className = "card-favorito__remover";
        botaoRemover.dataset.remover = produto.id;
        botaoRemover.setAttribute("aria-label", `Remover ${produto.nome} dos favoritos`);
        botaoRemover.setAttribute("aria-pressed", "true");
        botaoRemover.textContent = "♥";

        card.append(link, botaoRemover);
        return card;
    }

    function renderizar() {
        try {
            const favoritos = lerFavoritos();
            const produtosFavoritos = favoritos
                .map(id => PRODUTOS.find(produto => String(produto.id) === String(id)))
                .filter(Boolean);

            lista.replaceChildren(...produtosFavoritos.map(criarCard));
            mensagemErro.hidden = true;
            mensagemErro.textContent = "";
            lista.hidden = produtosFavoritos.length === 0;
            mensagemVazia.hidden = produtosFavoritos.length > 0;
        } catch (erro) {
            lista.replaceChildren();
            lista.hidden = true;
            mensagemVazia.hidden = true;
            mensagemErro.textContent = erro.message;
            mensagemErro.hidden = false;
        }
    }

    area.addEventListener("click", event => {
        if (!(event.target instanceof Element)) return;

        const botao = event.target.closest("[data-remover]");
        if (!botao) return;

        try {
            const id = botao.dataset.remover;
            salvarFavoritos(lerFavoritos().filter(favorito => String(favorito) !== String(id)));
            renderizar();
        } catch (erro) {
            mensagemErro.textContent = erro.message;
            mensagemErro.hidden = false;
        }
    });

    window.addEventListener("storage", event => {
        if (event.key === CHAVE_FAVORITOS || event.key === null) {
            renderizar();
        }
    });

    PRODUTOS_PRONTOS.then(renderizar).catch(erro => {
        mensagemVazia.hidden = true;
        mensagemErro.textContent = erro.message;
        mensagemErro.hidden = false;
    });
})();
