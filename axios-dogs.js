// quando clicco sul bottone faccio una chiamata alla API 
const addBtn = document.getElementById('add');
//console.log(addBtn);
addBtn.addEventListener('click', addDog);


//funzione che aggiunge un immagine di cane alla gallery
function addDog(){
//console.log('aggiungo un cane');
//con axios chiamo l'api dei cani e prendo l'url dell'immagine
axios.get('https://dog.ceo/api/breeds/image/random')
  .then(function (response) {
    // handle success
    //navigo l'oggetto facendo uscire in console solo il messaggio con http dell'immagine 
    console.log(response.data.message);
    const imgUrl = response.data.message;
    // con l'url dell'immagine creo un nuovo tag img da mettere in pagina
    createImg(imgUrl);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
}

// aggiunge alla gallery una img con la src passata come parametro
function createImg(url){
let image = document.createElement('img');
image.src = url;
image.className = 'img-thumbnail';
image.alt = 'foto di un cane';
//dopo aver creat l'oggetto appendo la foto alla pagina
document.getElementById('gallery').appendChild(image);
}




