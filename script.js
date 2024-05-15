function mostrarSabor(sabor) {
  var botao = document.getElementById(sabor);
  var saborSelecionado = document.getElementById("saborSelecionado");

  // Exibe a frase do sabor selecionado
  saborSelecionado.textContent = "Você selecionou o sabor de " + sabor + ".";

  // Verifica qual sabor foi selecionado e atribui a cor correspondente
  switch (sabor) {
    case 'morango':
      botao.style.backgroundColor = 'pink';
      break;
    case 'chocolate':
      botao.style.backgroundColor = 'brown';
      break;
    case 'maracuja':
      botao.style.backgroundColor = 'yellow';
      break;
    case 'limao':
      botao.style.backgroundColor = 'limegreen';
      break;
    case 'jabuticaba':
      botao.style.backgroundColor = 'purple';
      break;
    case 'creme':
      botao.style.backgroundColor = 'beige';
      break;



    default:  // Cor padrão caso não seja nenhum dos sabores acima 

      botao.style.backgroundColor = '';

  }

  setTimeout(function() { botao.style.backgroundColor = '';} ,2000)
}





