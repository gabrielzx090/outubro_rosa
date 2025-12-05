document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  let numero = "5519998284139"; 
  let texto = `Olá! Me chamo ${nome}.
Email: ${email}
Mensagem: ${mensagem}`;

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
});
