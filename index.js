document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sendBtn').addEventListener('click', function () {
    const num = document.getElementById('num').value;
    const type = document.getElementById('type').value;

    const obj = {
      numeroSecuriteSociale: num,
      typeDocument: type
    };
     console.log(JSON.stringify(obj) )
    fetch('http://localhost:6001/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj) 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l’envoi de la requête');
      }
      return response.json();
    })
    .then(data => {
      console.log('Réponse du serveur :', data);
    })
    .catch(error => {
      console.error('Erreur :', error);
    });
  });
});