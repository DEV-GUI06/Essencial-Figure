function abrirModal(id) {
  const produtos = {
    1: {
      titulo: "Naruto Uzumaki",
      descricao: "Figura detalhada de Naruto com base de chakra.",
      preco: "R$ 129,90",
      codigo: "COD-001",
      imagens: [
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/203588-150-150/p_55339_alta_1.png?v=637721741582200000",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/203589-150-150/p_55339_alta_2.png?v=637721741592530000",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/203590-150-150/p_55339_alta_3.png?v=637721741603300000",
      ],
    },
    2: {
      titulo: "Sasuke Uchiha",
      descricao: "Figura do Sasuke com espada e olhos Sharingan.",
      preco: "R$ 139,90",
      codigo: "COD-002",
      imagens: [
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191704-150-150/p_54400_alta_7.png?v=637589246888070000",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191698-150-150/p_54400_alta_1.png?v=637589246811770000",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191699-150-150/p_54400_alta_2.png?v=637589246826000000",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191700-150-150/p_54400_alta_3.png?v=637589246838030000",
      ],
    },
    3: {
      titulo: "Goku Super Saiyajin 3",
      descricao: "Goku em sua forma Super Saiyajin 3 com energia brilhante.",
      preco: "R$ 149,90",
      codigo: "COD-003",
      imagens: [
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191724-150-150/p_54409_alta_8.png?v=637589247165770000",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191718-150-150/p_54409_alta_2.png?v=637589247124330000",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191720-150-150/p_54409_alta_4.png?v=637589247135730000",
      ],
    },
    4: {
      titulo: "Luffy",
      descricao: "Luffy com seu chapéu de palha e sorriso característico.",
      preco: "R$ 119,90",
      codigo: "COD-004",
      imagens: [
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191673",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191669",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191671",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/191674",
      ],
    },
    5: {
      titulo: "Itachi Uchiha",
      descricao: "Figura do Itachi com capa da Akatsuki.",
      preco: "R$ 159,90",
      codigo: "COD-005",
      imagens: [
        "https://a-static.mlcdn.com.br/800x560/action-figure-uchiha-itachi-akatsuki-anime-naruto-29-cm-boneco-estatueta-colecionavel/actionstore/itachicorvos/212e47ec540781cd9f63bae31e92dac1.jpeg",
        "https://a-static.mlcdn.com.br/90x90/action-figure-uchiha-itachi-akatsuki-anime-naruto-29-cm-boneco-estatueta-colecionavel/actionstore/itachicorvos/7dfcdf08206a358a72de5c2d2114bae3.jpeg",
        "https://a-static.mlcdn.com.br/800x560/action-figure-uchiha-itachi-akatsuki-anime-naruto-29-cm-boneco-estatueta-colecionavel/actionstore/itachicorvos/7fe909f317b49975f57287106133de68.jpeg",
        "img/itachi4.jpg",
      ],
    },
    6: {
      titulo: "Vegeta Blue",
      descricao: "Vegeta em forma Blue com aura energética.",
      preco: "R$ 139,90",
      codigo: "COD-006",
      imagens: [
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/241449",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/241451",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/241454",
        "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/241455-150-150/p_55647_alta_7.png?v=637838156587970000",
      ],
    },
  };

  const produto = produtos[id];

  // Título e descrição
  document.getElementById("modal-title").innerText = produto.titulo;
  document.getElementById("modal-desc").innerHTML = `
    ${produto.descricao}
    <small style="color:#ccc; display:block; margin-top:0.5rem;">
      Clique em comprar para ser redirecionado ao WhatsApp.
    </small>
  `;

  // Preço
  let precoEl = document.getElementById("modal-preco");
  if (!precoEl) {
    precoEl = document.createElement("p");
    precoEl.id = "modal-preco";
    precoEl.className = "card-preco";
    document.getElementById("modal-desc").after(precoEl);
  }
  precoEl.innerText = produto.preco;

  // Código do produto (sutil)
  let codigoEl = document.getElementById("modal-codigo");
  if (!codigoEl) {
    codigoEl = document.createElement("small");
    codigoEl.id = "modal-codigo";
    codigoEl.style.color = "#aaa";
    codigoEl.style.fontSize = "0.85rem";
    codigoEl.style.marginTop = "0.2rem";
    document.getElementById("modal-preco").after(codigoEl);
  }
  codigoEl.innerText = `Código do produto: ${produto.codigo}`;

  // Galeria
  const galeria = document.getElementById("modal-gallery");
  galeria.innerHTML = "";
  const imagemPrincipal = document.getElementById("imagem-principal");
  imagemPrincipal.src = produto.imagens[0];

  produto.imagens.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    if (index === 0) img.classList.add("selecionada");

    img.addEventListener("click", () => {
      imagemPrincipal.classList.add("animar");
      setTimeout(() => {
        imagemPrincipal.src = src;
        imagemPrincipal.classList.remove("animar");
      }, 300);

      galeria
        .querySelectorAll("img")
        .forEach((th) => th.classList.remove("selecionada"));
      img.classList.add("selecionada");
    });

    galeria.appendChild(img);
  });

  // WhatsApp
  const mensagem = `Olá! Tenho interesse no produto:
- *${produto.titulo}*
- Código: ${produto.codigo}
- Preço: ${produto.preco}`;

  const whatsapp = `https://wa.me/5511930236535?text=${encodeURIComponent(
    mensagem
  )}`;
  document.getElementById("botao-comprar").href = whatsapp;

  const botao = document
    .getElementById("botao-comprar")
    .querySelector("button");
  botao.innerHTML = `
    Comprar
    <img src="assets/003-whatsapp.png" 
         alt="WhatsApp" style="width:18px; height:18px; margin-left:8px;">
  `;

  // Exibir modal
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

document
  .getElementById("barra-pesquisa")
  .addEventListener("input", function () {
    const termo = this.value.toLowerCase();
    const produtos = document.querySelectorAll(".card-produto");
    const mensagemErro = document.getElementById("mensagem-erro");

    let encontrou = false;

    produtos.forEach((produto) => {
      const titulo = produto
        .querySelector(".card-titulo")
        .textContent.toLowerCase();
      const corresponde = titulo.includes(termo);
      produto.style.display = corresponde ? "flex" : "none";
      if (corresponde) encontrou = true;
    });

    mensagemErro.style.display = encontrou ? "none" : "block";
  });

// Impedir arrastar imagens
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("draggable", "false");
  });
});
