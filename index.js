document.getElementById('sendBtn').addEventListener('click', function () {
  const num = document.getElementById('num').value;
  const type = document.getElementById('type').value;

  // Just printing for now
  console.log('Numéro de sécurité:', num);
  console.log('Type choisi:', type);

  // Later: you can use fetch to send this data to your Django API
});