// Carregar depois de produtos.js. Reutiliza PRODUTOS e larts-carrinho.
(() => {
    'use strict';

    const CHAVE_CARRINHO = 'larts-carrinho';
    const CHAVE_PEDIDOS = 'larts-pedidos';
    const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const paginaCarrinho = document.getElementById('pagina-carrinho');
    const paginaFinalizacao = document.getElementById('pagina-finalizacao');
    const formulario = document.getElementById('formulario-pedido');
    let assinaturaExibida = '';
    let enviando = false;
    let concluido = false;

    function mensagem(texto) {
        document.getElementById('mensagem').textContent = texto;
    }

    function escapar(valor) {
        return String(valor).replace(/[&<>"']/g, caractere => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[caractere]);
    }

    function dinheiro(centavos) {
        return moeda.format(centavos / 100);
    }

    function lerLista(chave) {
        const valor = localStorage.getItem(chave);
        let lista;
        try {
            lista = JSON.parse(valor || '[]');
        } catch {
            throw new Error('Os dados salvos estão inválidos. Peça ajuda ao grupo para recuperar o armazenamento.');
        }
        if (!Array.isArray(lista)) {
            throw new Error('O formato dos dados salvos é inválido. Peça ajuda ao grupo para recuperar o armazenamento.');
        }
        return lista;
    }

    function precoCentavos(produto) {
        if (Number.isSafeInteger(produto.precoCentavos) && produto.precoCentavos >= 0) {
            return produto.precoCentavos;
        }
        // Compatibilidade com os preços atuais, por exemplo "89,90".
        const valor = Number(String(produto.preco).replace(',', '.'));
        const centavos = Math.round(valor * 100);
        if (!Number.isSafeInteger(centavos) || centavos < 0) {
            throw new Error('Preço inválido no cadastro de ' + produto.nome + '.');
        }
        return centavos;
    }

    function chaveItem(item) {
        return JSON.stringify([item.produtoId, item.tamanho, item.cor || '']);
    }

    function carregarCarrinho() {
        const grupos = new Map();
        for (const item of lerLista(CHAVE_CARRINHO)) {
            const produto = item && PRODUTOS.find(produto => produto.id === item.produtoId);
            if (!produto || !produto.tamanhos.includes(item.tamanho)) {
                throw new Error('Há um produto ou tamanho indisponível no carrinho. Use “Esvaziar carrinho” para refazer a seleção.');
            }
            const quantidade = Number(item.quantidade);
            if (!Number.isSafeInteger(quantidade) || quantidade < 1) {
                throw new Error('Há uma quantidade inválida no carrinho. Use “Esvaziar carrinho” para refazer a seleção.');
            }
            const normalizado = {
                produtoId: produto.id,
                tamanho: item.tamanho,
                cor: typeof item.cor === 'string' ? item.cor : '',
                quantidade
            };
            const chave = chaveItem(normalizado);
            const anterior = grupos.get(chave);
            if (anterior) {
                anterior.quantidade += quantidade;
                if (!Number.isSafeInteger(anterior.quantidade)) throw new Error('Quantidade acima do limite permitido.');
            } else {
                grupos.set(chave, normalizado);
            }
        }
        return [...grupos.values()].map(item => {
            const produto = PRODUTOS.find(produto => produto.id === item.produtoId);
            const unitarioCentavos = precoCentavos(produto);
            const subtotalCentavos = unitarioCentavos * item.quantidade;
            if (!Number.isSafeInteger(subtotalCentavos)) throw new Error('Valor acima do limite permitido.');
            return { ...item, nome: produto.nome, imagem: produto.imagem, unitarioCentavos, subtotalCentavos };
        });
    }

    function salvarCarrinho(itens) {
        const dados = itens.map(({ produtoId, tamanho, cor, quantidade }) => ({ produtoId, tamanho, cor, quantidade }));
        localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(dados));
    }

    function totalCarrinho(itens) {
        const total = itens.reduce((soma, item) => soma + item.subtotalCentavos, 0);
        if (!Number.isSafeInteger(total)) throw new Error('Total acima do limite permitido.');
        return total;
    }

    function detalhes(item) {
        return 'Tamanho ' + escapar(item.tamanho) + (item.cor ? ' · ' + escapar(item.cor) : '');
    }

    function resumo(itens) {
        const total = totalCarrinho(itens);
        document.getElementById('resumo-valores').innerHTML = `
            <p class="resumo__linha"><span>Subtotal</span><span>${dinheiro(total)}</span></p>
            <p class="resumo__linha"><span>Frete demonstrativo</span><span>Grátis</span></p>
            <p class="resumo__linha resumo__linha--total"><span>Total</span><span>${dinheiro(total)}</span></p>`;
    }

    function renderizar() {
        if (concluido) return;
        const itens = carregarCarrinho();
        assinaturaExibida = JSON.stringify(itens);
        resumo(itens);
        if (paginaCarrinho) {
            document.getElementById('itens-carrinho').innerHTML = itens.map((item, indice) => `
                <article class="carrinho__item" data-chave="${escapar(chaveItem(item))}">
                    <img class="carrinho__imagem" src="${escapar(item.imagem)}" alt="${escapar(item.nome)}">
                    <div class="carrinho__dados">
                        <h2 class="carrinho__nome"><a href="produto.html?id=${encodeURIComponent(item.produtoId)}">${escapar(item.nome)}</a></h2>
                        <p class="carrinho__detalhe">${detalhes(item)}</p>
                        <p class="carrinho__detalhe">${dinheiro(item.unitarioCentavos)} por unidade</p>
                        <strong>${dinheiro(item.subtotalCentavos)}</strong>
                        <div class="carrinho__acoes"><label for="quantidade-${indice}">Quantidade</label>
                            <input class="carrinho__quantidade" id="quantidade-${indice}" type="number" min="1" step="1" value="${item.quantidade}" required aria-label="Quantidade de ${escapar(item.nome)}">
                            <button class="carrinho__remover" type="button" data-remover aria-label="Remover ${escapar(item.nome)}">Remover</button>
                        </div>
                    </div>
                </article>`).join('') || '<div class="carrinho__vazio"><h2>Seu carrinho está vazio</h2><p>Escolha suas peças no catálogo para começar.</p><a href="index.html#catalogo">Explorar catálogo</a></div>';
            document.getElementById('avancar').hidden = itens.length === 0;
        }
        if (paginaFinalizacao) {
            document.getElementById('itens-resumo').innerHTML = itens.map(item => `
                <div class="resumo__produto"><strong>${escapar(item.nome)}</strong><br>${detalhes(item)}<br>${item.quantidade} × ${dinheiro(item.unitarioCentavos)} = ${dinheiro(item.subtotalCentavos)}</div>`).join('');
            formulario.hidden = itens.length === 0;
            if (!itens.length) mensagem('Seu carrinho está vazio. Volte ao catálogo para escolher os produtos.');
        }
    }

    function atualizar() {
        try {
            renderizar();
        } catch (erro) {
            mensagem(erro.message);
            if (paginaCarrinho) document.getElementById('avancar').hidden = true;
            if (formulario) formulario.hidden = true;
        }
    }

    function alterarItem(evento) {
        const linha = evento.target.closest('[data-chave]');
        if (!linha) return;
        const remover = evento.target.matches('[data-remover]');
        if (!remover && evento.type !== 'change') return;
        try {
            const itens = carregarCarrinho();
            const indice = itens.findIndex(item => chaveItem(item) === linha.dataset.chave);
            if (indice === -1) return atualizar();
            if (remover) {
                itens.splice(indice, 1);
            } else {
                const quantidade = Number(evento.target.value);
                evento.target.setCustomValidity('');
                if (!Number.isSafeInteger(quantidade) || quantidade < 1 || !Number.isSafeInteger(quantidade * itens[indice].unitarioCentavos)) {
                    evento.target.setCustomValidity('Informe uma quantidade inteira, positiva e válida.');
                    evento.target.reportValidity();
                    return;
                }
                itens[indice].quantidade = quantidade;
            }
            salvarCarrinho(itens);
            mensagem(remover ? 'Produto removido.' : 'Quantidade atualizada.');
            renderizar();
            const proximo = document.querySelectorAll('.carrinho__quantidade')[Math.min(indice, itens.length - 1)];
            if (proximo) proximo.focus();
        } catch (erro) {
            mensagem('Não foi possível atualizar o carrinho. ' + erro.message);
        }
    }

    function validarFormulario() {
        for (const campo of formulario.querySelectorAll('input')) {
            campo.value = campo.value.trim();
            campo.setCustomValidity('');
        }
        const nome = formulario.elements.nome;
        if (nome.value.split(/\s+/).length < 2) nome.setCustomValidity('Informe seu nome completo.');
        const cep = formulario.elements.cep;
        if (!/^\d{5}-?\d{3}$/.test(cep.value)) cep.setCustomValidity('Informe um CEP com 8 números, como 64000-000.');
        const telefone = formulario.elements.telefone;
        if (!/^[\d\s()+-]+$/.test(telefone.value) || !/^\d{10,11}$/.test(telefone.value.replace(/\D/g, ''))) {
            telefone.setCustomValidity('Informe um telefone brasileiro com DDD e 10 ou 11 números.');
        }
        return formulario.reportValidity();
    }

    function mostrarConfirmacao(pedido) {
        concluido = true;
        paginaFinalizacao.hidden = true;
        const area = document.getElementById('confirmacao');
        area.hidden = false;
        area.innerHTML = `<h2 id="titulo-confirmacao" tabindex="-1">Pedido demonstrativo registrado!</h2>
            <p>Número <strong>${escapar(pedido.id)}</strong></p>
            <p>Registrado em ${escapar(new Date(pedido.criadoEm).toLocaleString('pt-BR'))}.</p>
            <p>Olá, ${escapar(pedido.cliente.nome)}. Sua seleção foi salva neste navegador.</p>
            <p>Total <strong>${dinheiro(pedido.totalCentavos)}</strong> · frete gratuito.</p>
            <p>Esta demonstração não realiza cobrança nem envia o pedido à loja.</p>
            <a class="botao" href="index.html#catalogo">Voltar ao catálogo</a>`;
        document.getElementById('titulo-confirmacao').focus();
    }

    async function finalizar(evento) {
        evento.preventDefault();
        if (enviando || concluido || !validarFormulario()) return;
        enviando = true;
        const botao = document.getElementById('confirmar-pedido');
        botao.disabled = true;
        try {
            const executar = () => {
                const itens = carregarCarrinho();
                if (!itens.length) throw new Error('Seu carrinho está vazio.');
                if (JSON.stringify(itens) !== assinaturaExibida) {
                    renderizar();
                    throw new Error('O carrinho mudou. Confira o resumo atualizado e confirme novamente.');
                }
                const dados = Object.fromEntries(new FormData(formulario));
                const pedido = {
                    id: 'LARTS-' + crypto.randomUUID(),
                    criadoEm: new Date().toISOString(),
                    status: 'demonstracao-local',
                    cliente: { nome: dados.nome, email: dados.email, telefone: dados.telefone },
                    endereco: { cep: dados.cep, logradouro: dados.logradouro, numero: dados.numero, complemento: dados.complemento, bairro: dados.bairro, cidade: dados.cidade, estado: dados.estado },
                    itens,
                    subtotalCentavos: totalCarrinho(itens),
                    freteCentavos: 0,
                    totalCentavos: totalCarrinho(itens)
                };
                // O integrante 4 pode substituir esta persistência por sua integração.
                // Só limpar o carrinho após a confirmação de gravação do pedido.
                const pedidos = lerLista(CHAVE_PEDIDOS);
                pedidos.push(pedido);
                localStorage.setItem(CHAVE_PEDIDOS, JSON.stringify(pedidos));
                mostrarConfirmacao(pedido);
                formulario.reset();
                try {
                    localStorage.removeItem(CHAVE_CARRINHO);
                    mensagem('');
                } catch {
                    mensagem('Pedido registrado. Não foi possível limpar o carrinho automaticamente.');
                }
            };
            // Serializa confirmações simultâneas entre abas em navegadores compatíveis.
            if (navigator.locks) await navigator.locks.request('larts-finalizar-pedido', executar);
            else executar();
        } catch (erro) {
            mensagem('Não foi possível finalizar. ' + erro.message);
        } finally {
            enviando = false;
            botao.disabled = false;
        }
    }

    if (paginaCarrinho) {
        paginaCarrinho.addEventListener('change', alterarItem);
        paginaCarrinho.addEventListener('click', alterarItem);
        const limpar = document.createElement('button');
        limpar.type = 'button';
        limpar.className = 'carrinho__remover';
        limpar.textContent = 'Esvaziar carrinho';
        limpar.addEventListener('click', () => {
            if (!window.confirm('Remover todos os produtos do carrinho?')) return;
            try {
                localStorage.removeItem(CHAVE_CARRINHO);
                mensagem('Carrinho esvaziado.');
                atualizar();
            } catch {
                mensagem('Não foi possível acessar o armazenamento do navegador.');
            }
        });
        paginaCarrinho.append(limpar);
    }
    if (formulario) {
        const cidade = formulario.elements.cidade;
        const avisoTimon = document.getElementById('aviso-timon');
        cidade.addEventListener('change', () => {
            const nomeCidade = cidade.value.trim().normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '').toLowerCase();
            const ehTimon = /^timon(?:\s*[-/]\s*(?:ma|maranhao))?$/.test(nomeCidade);
            if (ehTimon && !avisoTimon.open) avisoTimon.showModal();
        });
        formulario.addEventListener('submit', finalizar);
        formulario.addEventListener('input', evento => evento.target.setCustomValidity(''));
    }
    window.addEventListener('storage', evento => {
        if (evento.key === CHAVE_CARRINHO || evento.key === null) {
            atualizar();
            if (!concluido) mensagem('O carrinho foi atualizado em outra aba. Confira os itens.');
        }
    });
    atualizar();
})();
