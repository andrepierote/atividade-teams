// Lart's - cadastro simples de produtos e interação da loja.
// Para editar produtos, altere os dados dentro da constante PRODUTOS.
// Os favoritos e o carrinho são salvos no localStorage do navegador.

const PRODUTOS = [
    {
        "id": "vestido-1",
        "nome": "Vestido alcinhas",
        "categoria": "Vestidos",
        "imagem": "imagens/produto/vestido-1.jpg",
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
        "imagem": "imagens/produto/vestido-2.jpg",
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
        "imagem": "imagens/produto/vestido-3.jpg",
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
        "imagem": "imagens/produto/vestido-4.jpg",
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
        "imagem": "imagens/produto/vestido-5.jpg",
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
        "imagem": "imagens/produto/vestido-6.jpg",
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
        "imagem": "imagens/produto/camisa-1.png",
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
        "imagem": "imagens/produto/camisa-2.jpg",
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
        "imagem": "imagens/produto/camisa-3.jpg",
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
        "imagem": "imagens/produto/camisa-4.jpg",
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
        "imagem": "imagens/produto/camisa-5.jpg",
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
        "imagem": "imagens/produto/camisa-6.jpg",
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
        "imagem": "imagens/produto/conjunto-1.jpg",
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
        "imagem": "imagens/produto/conjunto-2.jpg",
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
        "imagem": "imagens/produto/conjunto-3.jpg",
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
        "imagem": "imagens/produto/conjunto-4.jpg",
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
        "imagem": "imagens/produto/conjunto-5.jpg",
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
        "imagem": "imagens/produto/conjunto-6.jpg",
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

function buscarProduto(id) {
    return PRODUTOS.find(produto => produto.id === id);
}

function abrirProduto(id) {
    window.location.href = "produto.html?id=" + encodeURIComponent(id);
}

function formatarPreco(preco) {
    return "R$ " + preco;
}

function criarCardProduto(produto) {
    return `
        <article class="produto-card">
            <a href="produto.html?id=${encodeURIComponent(produto.id)}" class="produto-card-link">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>${formatarPreco(produto.preco)}</p>
            </a>
        </article>
    `;
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
    botao.classList.toggle("favoritado", estaFavoritado);
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
        area.innerHTML = '<p class="produto-nao-encontrado">Produto não encontrado. <a href="index.html#catalogo">Voltar ao catálogo</a>.</p>';
        return;
    }

    document.title = produto.nome + " | Lart's";
    area.innerHTML = `
        <div class="produto-destaque">
            <div class="produto-imagem-area">
                <img class="produto-imagem-principal" src="${produto.imagem}" alt="${produto.nome}">
            </div>

            <div class="produto-resumo">
                <p class="produto-categoria">${produto.categoria}</p>
                <h1>${produto.nome}</h1>
                <p class="produto-preco">${formatarPreco(produto.preco)}</p>
                <p class="produto-parcela">Preço ilustrativo: atualize conforme o valor real.</p>

                <div class="selecao-tamanho">
                    <h2>Escolha o tamanho</h2>
                    <div class="tamanhos">
                        ${produto.tamanhos.map(tamanho => `<button type="button" class="botao-tamanho" data-tamanho="${tamanho}">${tamanho}</button>`).join("")}
                    </div>
                    <p id="aviso-tamanho" class="aviso-tamanho">Selecione um tamanho antes de adicionar ao carrinho.</p>
                </div>

                <button type="button" id="botao-carrinho" class="botao-comprar">Adicionar ao carrinho</button>
                <button type="button" id="botao-favorito" class="botao-favorito">♡ Adicionar aos favoritos</button>
            </div>
        </div>

        <section class="produto-informacoes">
            <h2>Descrição do produto</h2>
            <p>${produto.descricao}</p>
            <h2>Informações adicionais</h2>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
            <p><strong>Tamanhos disponíveis:</strong> ${produto.tamanhos.join(", ")}</p>
            <p class="nota-edicao">Estas informações são exemplos. Edite os dados no arquivo <strong>produtos.js</strong>.</p>
        </section>
    `;

    let tamanhoSelecionado = "";
    document.querySelectorAll(".botao-tamanho").forEach(botao => {
        botao.addEventListener("click", function() {
            document.querySelectorAll(".botao-tamanho").forEach(item => item.classList.remove("selecionado"));
            this.classList.add("selecionado");
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

function prepararFavoritos() {
    const area = document.getElementById("lista-favoritos");
    if (!area) return;

    const favoritos = obterFavoritos();
    const produtosFavoritos = favoritos.map(buscarProduto).filter(Boolean);

    if (produtosFavoritos.length === 0) {
        area.innerHTML = `
            <div class="favoritos-vazio">
                <h2>♡</h2>
                <h3>Sua lista está vazia!</h3>
                <p>Você ainda não adicionou nenhum produto aos seus favoritos.</p>
                <a href="index.html#catalogo">Voltar ao catálogo</a>
            </div>
        `;
        return;
    }

    area.innerHTML = `<div class="grade-produtos">${produtosFavoritos.map(criarCardProduto).join("")}</div>`;
}

// Na página inicial, transforma as imagens de roupas em links para o detalhe.
// Assim não é necessário alterar manualmente cada imagem do catálogo.
function ativarLinksDaPaginaInicial() {
    if (!document.querySelector(".produto-card__figura")) return;

    document.querySelectorAll(".produto-card__figura img").forEach(imagem => {
        const nomeArquivo = imagem.getAttribute("src").split("/").pop();
        const produto = PRODUTOS.find(item => item.imagem.endsWith("/" + nomeArquivo));

        if (produto) {
            imagem.classList.add("imagem-clicavel-produto");
            imagem.title = "Ver detalhes de " + produto.nome;
            imagem.addEventListener("click", function(event) {
                // Impede que o clique também abra o link da categoria que envolve a imagem.
                event.preventDefault();
                event.stopPropagation();
                abrirProduto(produto.id);
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    prepararPaginaProduto();
    prepararFavoritos();
    ativarLinksDaPaginaInicial();
});
