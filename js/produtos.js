// Lart's - cadastro simples de produtos e interação da loja.
// Para editar produtos, altere os dados dentro da constante PRODUTOS.
// Os favoritos e o carrinho são salvos no localStorage do navegador.

const PRODUTOS = [
    {
        "id": "vestido-1",
        "nome": "Vestido alcinhas",
        "categoria": "Vestidos",
        "imagem": "../imagens/produto/vestido-1.jpg",
        "preco": "384,90",
        "descricao": "Um vestido longo branco que combina delicadeza e elegância. Seu design sem mangas e caimento fluido proporciona um visual sofisticado, ideal para eventos especiais e ocasiões que pedem um look mais refinado.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "vestido-2",
        "nome": "Vestido longo",
        "categoria": "Vestidos",
        "imagem": "../imagens/produto/vestido-2.jpg",
        "preco": "595,90",
        "descricao": "Com uma tonalidade vermelha marcante, este vestido sem mangas oferece um visual elegante e moderno. Seu comprimento midi e caimento delicado tornam a peça uma ótima escolha para passeios, encontros e eventos especiais.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "vestido-3",
        "nome": "Vestido frente único",
        "categoria": "Vestidos",
        "imagem": "../imagens/produto/vestido-3.jpg",
        "preco": "469,90",
        "descricao": "Com uma tonalidade creme marcante, este vestido oferece um visual elegante e moderno. Seu comprimento midi e caimento delicado tornam a peça uma ótima escolha para passeios, encontros e eventos especiais.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "vestido-4",
        "nome": "Vestido brilhoso",
        "categoria": "Vestidos",
        "imagem": "../imagens/produto/vestido-4.jpg",
        "preco": "469,90",
        "descricao": "Com uma tonalidade similar ao lilás com tonalidade puxada para o fosco e briloso. Este vestido oferece um visual elegante e moderno. Seu comprimento midi e caimento delicado tornam a peça uma ótima escolha para passeios, encontros e eventos especiais.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "vestido-5",
        "nome": "Vestido curto",
        "categoria": "Vestidos",
        "imagem": "../imagens/produto/vestido-5.jpg",
        "preco": "349,90",
        "descricao": "Com uma tonalidade rosa choque marcante, este vestido oferece um visual elegante e moderno. Seu comprimento mais curto e caimento delicado tornam a peça uma ótima escolha para passeios, encontros e eventos especiais.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "vestido-6",
        "nome": "Vestido longo",
        "categoria": "Vestidos",
        "imagem": "../imagens/produto/vestido-6.jpg",
        "preco": "485,90",
        "descricao": "Com uma tonalidade puxada para o marrom com tom mais suavizado, este vestido oferece um visual elegante e moderno. Seu comprimento midi e caimento delicado tornam a peça uma ótima escolha para passeios, encontros e eventos especiais.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "camisa-1",
        "nome": "Camisa em linho",
        "categoria": "Camisas Masculinas",
        "imagem": "../imagens/produto/camisa-1.png",
        "preco": "186,90",
        "descricao": "Uma camisa polo branca que combina elegância e simplicidade. Seu visual discreto permite diversas combinações, sendo ideal tanto para ocasiões casuais quanto para momentos que exigem um estilo mais alinhado.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "camisa-2",
        "nome": "Camiseta Oversized",
        "categoria": "Camisas Masculinas",
        "imagem": "../imagens/produto/camisa-2.jpg",
        "preco": "145,50",
        "descricao": "Uma peça essencial para qualquer guarda-roupa masculino. Com design minimalista, mangas curtas e tonalidade neutra, oferece facilidade na hora de montar combinações modernas e confortáveis.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "camisa-3",
        "nome": "Camiseta Oversized",
        "categoria": "Camisas Masculinas",
        "imagem": "../imagens/produto/camisa-3.jpg",
        "preco": "145,50",
        "descricao": "Uma peça essencial para qualquer guarda-roupa masculino. Com design minimalista, mangas curtas e tonalidade neutra, oferece facilidade na hora de montar combinações modernas e confortáveis.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "camisa-4",
        "nome": "Camisa em tecido",
        "categoria": "Camisas Masculinas",
        "imagem": "../imagens/produto/camisa-4.jpg",
        "preco": "276,85",
        "descricao": "Uma opção moderna para quem prefere um estilo descontraído. Com modelagem aparentemente mais ampla e estampa discreta na região do peito, combina facilmente com calças jeans, bermudas e outros itens casuais.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "camisa-5",
        "nome": "Camisa Jeans",
        "categoria": "Camisas Masculinas",
        "imagem": "../imagens/produto/camisa-5.jpg",
        "preco": "276,85",
        "descricao": "Uma camiseta feita com tecido jeans. Seu design simples e contemporâneo permite criar combinações versáteis, sendo ideal para quem valoriza conforto e estilo no cotidiano.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "camisa-6",
        "nome": "Camiseta em tricô",
        "categoria": "Camisas Masculinas",
        "imagem": "../imagens/produto/camisa-6.jpg",
        "preco": "267,99",
        "descricao": "Uma camiseta custurada em tricô. Seu design simples e contemporâneo permite criar combinações versáteis, sendo ideal para quem valoriza conforto e estilo no cotidiano.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "conjunto-1",
        "nome": "Conjunto vinho elegante",
        "categoria": "Conjuntos Femininos",
        "imagem": "../imagens/produto/conjunto-1.jpg",
        "preco": "319,90",
        "descricao": "Um conjunto em tom vinho que transmite sofisticação e personalidade. Com uma proposta moderna e elegante, é ideal para quem deseja um visual marcante sem abrir mão da praticidade.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "conjunto-2",
        "nome": "Conjunto com capa",
        "categoria": "Conjuntos Femininos",
        "imagem": "../imagens/produto/conjunto-2.jpg",
        "preco": "267,90",
        "descricao": "Um conjunto em tom alaranjado que transmite sofisticação e personalidade. Com uma proposta moderna e elegante, é ideal para quem deseja um visual marcante sem abrir mão da praticidade..",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "conjunto-3",
        "nome": "Conjunto manga longa",
        "categoria": "Conjuntos Femininos",
        "imagem": "../imagens/produto/conjunto-3.jpg",
        "preco": "315,00",
        "descricao": "Um conjunto branco que valoriza a simplicidade e a elegância. Sua composição proporciona um visual leve e harmonioso, perfeito para passeios, viagens e ocasiões durante o dia.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "conjunto-4",
        "nome": "Conjunto casual",
        "categoria": "Conjuntos Femininos",
        "imagem": "../imagens/produto/conjunto-4.jpg",
        "preco": "187,60",
        "descricao": "Ideal para quem procura conforto e estilo em uma única combinação. A blusa creme acompanhada da saia marrom cria uma composição complementar, moderna e fácil de combinar com diferentes acessórios.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "conjunto-5",
        "nome": "Conjunto calça e blusa",
        "categoria": "Conjuntos Femininos",
        "imagem": "../imagens/produto/conjunto-5.jpg",
        "preco": "149,90",
        "descricao": "Uma combinação que destaca a elegância dos tons claros. A blusa sem mangas e a calça de modelagem ampla oferecem uma aparência sofisticada, sendo uma excelente opção para diferentes ocasiões.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "conjunto-6",
        "nome": "Conjunto Social",
        "categoria": "Conjuntos Femininos",
        "imagem": "../imagens/produto/conjunto-6.jpg",
        "preco": "484,75",
        "descricao": "Para quem gosta de transmitir confiança e personalidade, este conjunto vermelho é uma excelente escolha. Com blazer estruturado e calça combinando, oferece um visual elegante, moderno e cheio de presença.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    }
];

// O catálogo passa a ser a fonte de verdade da API. A lista antiga é limpa
// assim que o script é carregado para não misturar dados estáticos com o banco.
PRODUTOS.length = 0;

const API_BASE_URL = window.LARTS_API_URL || "http://localhost:8080";
const MOEDA = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const CATEGORIAS = {
    VESTIDOS: "Vestidos",
    CONJUNTOS_FEMININOS: "Conjuntos Femininos",
    CAMISAS_MASCULINAS: "Camisas Masculinas"
};

function escaparHtml(valor) {
    return String(valor).replace(/[&<>"']/g, caractere => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[caractere]);
}

function caminhoImagem(imgUrl) {
    if (!imgUrl || /^(https?:|data:|\/|\.\.\/)/.test(imgUrl)) return imgUrl || "";
    return "../" + imgUrl;
}

function normalizarProduto(produto) {
    const preco = Number(produto.price);
    if (!Number.isFinite(preco)) {
        throw new Error("A API retornou um produto com preço inválido.");
    }

    return {
        id: produto.id,
        nome: produto.name,
        descricao: produto.description || "",
        imagem: caminhoImagem(produto.imgUrl),
        preco,
        precoCentavos: Math.round(preco * 100),
        categoria: CATEGORIAS[produto.category] || produto.category,
        categoriaApi: produto.category,
        tamanhos: Array.isArray(produto.availableSizes) ? produto.availableSizes : []
    };
}

async function carregarProdutosDaApi() {
    const resposta = await fetch(`${API_BASE_URL}/product`);
    if (!resposta.ok) {
        throw new Error("Não foi possível carregar o catálogo da loja.");
    }

    const produtos = await resposta.json();
    if (!Array.isArray(produtos)) {
        throw new Error("A resposta do catálogo está em um formato inválido.");
    }

    PRODUTOS.splice(0, PRODUTOS.length, ...produtos.map(normalizarProduto));
    return PRODUTOS;
}

const PRODUTOS_PRONTOS = carregarProdutosDaApi();

function buscarProduto(id) {
    return PRODUTOS.find(produto => String(produto.id) === String(id));
}

function abrirProduto(id) {
    window.location.href = "produto.html?id=" + encodeURIComponent(id);
}

function formatarPreco(preco) {
    return MOEDA.format(Number(preco));
}

function obterFavoritos() {
    return JSON.parse(localStorage.getItem("larts-favoritos") || "[]");
}

function salvarFavoritos(lista) {
    localStorage.setItem("larts-favoritos", JSON.stringify(lista));
}

function alternarFavorito(id) {
    let favoritos = obterFavoritos();

    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(item => item !== id);
    } else {
        favoritos.push(id);
    }

    salvarFavoritos(favoritos);
    atualizarBotaoFavorito(id);
}

function atualizarBotaoFavorito(id) {
    const botao = document.getElementById("botao-favorito");
    if (!botao) return;

    const estaFavoritado = obterFavoritos().includes(id);
    botao.textContent = estaFavoritado ? "♥ Remover dos favoritos" : "♡ Adicionar aos favoritos";
    botao.classList.toggle("produto-destaque__botao--favoritado", estaFavoritado);
}

function mostrarAvisoCarrinho(texto, erro = false) {
    const aviso = document.getElementById("aviso-carrinho");
    aviso.hidden = false;
    aviso.classList.toggle("aviso-carrinho--erro", erro);
    aviso.querySelector(".aviso-carrinho__icone").textContent = erro ? "!" : "✓";
    document.getElementById("aviso-carrinho-link").hidden = erro;
    const mensagem = document.getElementById("aviso-carrinho-texto");
    mensagem.textContent = "";
    requestAnimationFrame(() => {
        mensagem.textContent = texto;
    });
}

function adicionarCarrinho(id, tamanho) {
    try {
        const carrinho = JSON.parse(localStorage.getItem("larts-carrinho") || "[]");
        carrinho.push({ produtoId: id, tamanho: tamanho, quantidade: 1 });
        localStorage.setItem("larts-carrinho", JSON.stringify(carrinho));
    } catch {
        mostrarAvisoCarrinho("Não foi possível salvar o item. Verifique o armazenamento do navegador e tente novamente.", true);
        return;
    }
    const produto = buscarProduto(id);
    mostrarAvisoCarrinho(`${produto.nome} · tamanho ${tamanho}. Prontinho, está no carrinho!`);
}

function prepararPaginaProduto() {
    const area = document.getElementById("detalhe-produto");
    if (!area) return;

    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");
    const produto = buscarProduto(id);

    if (!produto) {
        area.innerHTML = '<p class="produto-pagina__nao-encontrado">Produto não encontrado. <a href="index.html#catalogo">Voltar ao catálogo</a>.</p>';
        return;
    }

    document.title = produto.nome + " | Lart's";
    area.innerHTML = `
        <div class="produto-destaque">
            <div class="produto-destaque__imagem-area">
                <img class="produto-destaque__imagem" src="${escaparHtml(produto.imagem)}" alt="${escaparHtml(produto.nome)}">
            </div>

            <div class="produto-destaque__resumo">
                <p class="produto-destaque__categoria">${escaparHtml(produto.categoria)}</p>
                <h1 class="produto-destaque__titulo">${escaparHtml(produto.nome)}</h1>
                <p class="produto-destaque__preco">${formatarPreco(produto.preco)}</p>
                <p class="produto-destaque__parcela">Preço ilustrativo: atualize conforme o valor real.</p>

                <div class="selecao-tamanho">
                    <h2 class="selecao-tamanho__titulo">Escolha o tamanho</h2>
                    <div class="selecao-tamanho__opcoes">
                        ${produto.tamanhos.map(tamanho => `<button type="button" class="selecao-tamanho__botao" data-tamanho="${escaparHtml(tamanho)}">${escaparHtml(tamanho)}</button>`).join("")}
                    </div>
                    <p id="aviso-tamanho" class="selecao-tamanho__aviso">Selecione um tamanho antes de adicionar ao carrinho.</p>
                </div>

                <button type="button" id="botao-carrinho" class="produto-destaque__botao produto-destaque__botao--comprar">Adicionar ao carrinho</button>
                <button type="button" id="botao-favorito" class="produto-destaque__botao produto-destaque__botao--favorito">♡ Adicionar aos favoritos</button>
            </div>
        </div>

        <section class="produto-informacoes">
            <h2 class="produto-informacoes__titulo">Descrição do produto</h2>
            <p>${escaparHtml(produto.descricao)}</p>
            <h2 class="produto-informacoes__titulo">Informações adicionais</h2>
            <p><strong>Categoria:</strong> ${escaparHtml(produto.categoria)}</p>
            <p><strong>Tamanhos disponíveis:</strong> ${escaparHtml(produto.tamanhos.join(", "))}</p>
        </section>
    `;

    let tamanhoSelecionado = "";
    document.querySelectorAll(".selecao-tamanho__botao").forEach(botao => {
        botao.addEventListener("click", function() {
            document.querySelectorAll(".selecao-tamanho__botao").forEach(item => item.classList.remove("selecao-tamanho__botao--selecionado"));
            this.classList.add("selecao-tamanho__botao--selecionado");
            tamanhoSelecionado = this.dataset.tamanho;
            document.getElementById("aviso-tamanho").textContent = "Tamanho selecionado: " + tamanhoSelecionado;
        });
    });

    document.getElementById("botao-carrinho").addEventListener("click", function() {
        if (!tamanhoSelecionado) {
            document.getElementById("aviso-tamanho").textContent = "Por favor, escolha um tamanho.";
            return;
        }
        adicionarCarrinho(produto.id, tamanhoSelecionado);
    });

    document.getElementById("botao-favorito").addEventListener("click", () => {
        alternarFavorito(produto.id);
    });

    atualizarBotaoFavorito(produto.id);

    document.getElementById("fechar-aviso-carrinho").addEventListener("click", () => {
        document.getElementById("aviso-carrinho").hidden = true;
        document.getElementById("botao-carrinho").focus();
    });
}

function criarCardProduto(produto) {
    return `<article class="produto-card" data-produto-id="${escaparHtml(produto.id)}">
        <figure class="produto-card__figura">
            <img class="produto-card__imagem produto-card__imagem--clicavel" src="${escaparHtml(produto.imagem)}" alt="${escaparHtml(produto.nome)}" title="Ver detalhes de ${escaparHtml(produto.nome)}">
            <hr class="produto-card__divisor">
            <figcaption class="produto-card__legenda">${escaparHtml(produto.nome)}<br>${formatarPreco(produto.preco)}</figcaption>
        </figure>
    </article>`;
}

function renderizarCatalogos() {
    const secoes = {
        vestidos: "VESTIDOS",
        conjuntos: "CONJUNTOS_FEMININOS",
        camisaMasculina: "CAMISAS_MASCULINAS"
    };

    Object.entries(secoes).forEach(([idSecao, categoria]) => {
        const lista = document.querySelector(`#${idSecao} .catalogo__produtos`);
        if (!lista) return;

        lista.innerHTML = PRODUTOS
            .filter(produto => produto.categoriaApi === categoria)
            .map(criarCardProduto)
            .join("");
    });

    document.querySelectorAll("[data-produto-id]").forEach(card => {
        card.addEventListener("click", () => abrirProduto(card.dataset.produtoId));
    });
}

document.addEventListener("DOMContentLoaded", async function() {
    try {
        await PRODUTOS_PRONTOS;
        renderizarCatalogos();
        prepararPaginaProduto();
    } catch (erro) {
        const area = document.getElementById("detalhe-produto");
        if (area) {
            area.innerHTML = '<p class="produto-pagina__nao-encontrado">Não foi possível carregar o produto. Verifique se a API está em execução.</p>';
        }
        console.error(erro);
    }
});
