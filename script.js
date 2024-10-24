document.getElementById('currency-form').addEventListener('submit', function(event){
   event.preventDefault();

   //obter valor de entrada do formulário

  const valor = parseFloat(document.getElementById('amount').value);

  const daMoeda = document.getElementById ('daMoeda').value;

 
  const paraMoeda = document.getElementById ('paraMoeda').value;


});