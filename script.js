// === MUDAR COR DE FUNDO ===
const botaoMudarCor = document.getElementById('mudarCor');

function gerarCorAleatoria() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

botaoMudarCor.addEventListener('click', function() {
  const novaCor = gerarCorAleatoria();
  document.body.style.backgroundColor = novaCor;
});
