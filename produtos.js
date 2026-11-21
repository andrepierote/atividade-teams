// Lart's - cadastro simples de produtos e interação da loja.
// Para editar produtos, altere os dados dentro da constante PRODUTOS.
// Os favoritos e o carrinho são salvos no localStorage do navegador.

const PRODUTOS = [
    {
        "id": "vestido-1",
        "nome": "Vestido longo branco.",
        "categoria": "Vestidos",
        "imagem": "imagens/pag 2/vestido-fem1.jpg",
        "preco": "89,90",
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
        "nome": "Vestido vermelho",
        "categoria": "Vestidos",
        "imagem": "imagens/pag 2/vestido-fem2.jpg",
        "preco": "99,90",
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
        "nome": "Vestido branco",
        "categoria": "Vestidos",
        "imagem": "imagens/pag 2/vestido-fem3-recorte.jpg",
        "preco": "469,90",
        "descricao": "Com uma tonalidade branca marcante, este vestido oferece um visual elegante e moderno. Seu comprimento midi e caimento delicado tornam a peça uma ótima escolha para passeios, encontros e eventos especiais.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "camisa-1",
        "nome": "Camisa polo branca",
        "categoria": "Camisas Masculinas",
        "imagem": "imagens/pag 2/camisa-mas1.png",
        "preco": "69,90",
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
        "nome": "Camiseta básica bege clara",
        "categoria": "Camisas Masculinas",
        "imagem": "imagens/pag 2/camisa-mas2.jpg",
        "preco": "74,90",
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
        "nome": "Camisa xadrez masculina",
        "categoria": "Camisas Masculinas",
        "imagem": "imagens/pag 2/camisa-mas3.jpg",
        "preco": "79,90",
        "descricao": "Com estampa xadrez em tons escuros e claros, esta camisa apresenta um estilo casual e urbano. É uma ótima alternativa para complementar o visual, podendo ser utilizada aberta ou fechada.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "camisa-4",
        "nome": "Camiseta oversized cinza",
        "categoria": "Camisas Masculinas",
        "imagem": "imagens/pag 2/camisa-mas4.jpg",
        "preco": "79,90",
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
        "nome": "Camiseta branca estampada",
        "categoria": "Camisas Masculinas",
        "imagem": "imagens/pag 2/camisa-mas5.jpg",
        "preco": "84,90",
        "descricao": "Uma camiseta branca com detalhe gráfico discreto na parte frontal. Seu design simples e contemporâneo permite criar combinações versáteis, sendo ideal para quem valoriza conforto e estilo no cotidiano.",
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
        "imagem": "imagens/pag 2/conjunto-fem1.jpg",
        "preco": "119,90",
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
        "nome": "Conjunto cinza e bege",
        "categoria": "Conjuntos Femininos",
        "imagem": "imagens/pag 2/conjunto-fem2.jpg",
        "preco": "129,90",
        "descricao": "A combinação do cinza com o bege cria um visual discreto e contemporâneo. A parte superior ajustada contrasta com a calça de cintura alta, proporcionando uma composição versátil para o dia a dia.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "conjunto-3",
        "nome": "Conjunto branco delicado",
        "categoria": "Conjuntos Femininos",
        "imagem": "imagens/pag 2/conjunto-fem3.jpg",
        "preco": "119,90",
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
        "nome": "Conjunto casual cinza e bege",
        "categoria": "Conjuntos Femininos",
        "imagem": "imagens/pag 2/conjunto-fem4.jpg",
        "preco": "139,90",
        "descricao": "Ideal para quem procura conforto e estilo em uma única combinação. A blusa cinza acompanhada da calça bege cria uma composição neutra, moderna e fácil de combinar com diferentes acessórios.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "conjunto-5",
        "nome": "Conjunto branco moderno",
        "categoria": "Conjuntos Femininos",
        "imagem": "imagens/pag 2/conjunto-fem5.jpg",
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
        "nome": "Conjunto social vermelho",
        "categoria": "Conjuntos Femininos",
        "imagem": "imagens/pag 2/conjunto-fem6.jpg",
        "preco": "129,90",
        "descricao": "Para quem gosta de transmitir confiança e personalidade, este conjunto vermelho é uma excelente escolha. Com blazer estruturado e calça combinando, oferece um visual elegante, moderno e cheio de presença.",
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG"
        ]
    },
    {
        "id": "conjunto-7",
        "nome": "Conjunto vinho e preto",
        "categoria": "Conjuntos Femininos",
        "imagem": "imagens/pag 2/conjunto-fem7.jpg",
        "preco": "139,90",
        "descricao": "Uma combinação de cores que transmite modernidade e atitude. A parte superior vinho acompanhada da peça inferior preta cria um visual descontraído e estiloso, ideal para momentos de lazer e passeios.",
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

function adicionarCarrinho(id, tamanho) {
    let carrinho = JSON.parse(localStorage.getItem("larts-carrinho") || "[]");
    carrinho.push({ produtoId: id, tamanho: tamanho, quantidade: 1 });
    localStorage.setItem("larts-carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
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
