

document.getElementById('cadastroProdutoForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const setor = document.getElementById('setor').value;
    const tipo = document.getElementById('tipo').value;
    const preco = document.getElementById('preco').value; 


    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];


    produtos.push({ nome, setor, tipo, preco });


    localStorage.setItem('produtos', JSON.stringify(produtos));

    alert('Produto cadastrado com sucesso!');
    document.getElementById('cadastroProdutoForm').reset();
});


function listarProdutos() {
    const produtosSection = document.getElementById('produtos');
    produtosSection.innerHTML = '<h2>Produtos</h2>';


    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    if (produtos.length === 0) {
        produtosSection.innerHTML += '<p>Nenhum produto cadastrado.</p>';
        return;
    }

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'produto';
        produtoDiv.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Setor: ${produto.setor}</p>
            <p>Tipo: ${produto.tipo}</p>
            <p>Preço: R$ ${produto.preco}</p>
        `;
        produtosSection.appendChild(produtoDiv);
    });
}


if (window.location.pathname.endsWith('index.html')) {
    listarProdutos();
}