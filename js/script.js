//Creo array immagini
const imagesArray = [
    {
        img:"01.webp",
        nome: "Spiderman",
        descrizione: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider Man",
    },
    {
        img:"02.webp",
        nome: "Ratchet Clank",
        descrizione: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Ratchet Clank",
    },
    {
        img:"03.webp",
        nome: "Fortnite",
        descrizione: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Fortnite player",
    },
    {
        img:"04.webp",
        nome: "Stray",
        descrizione: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Stray",
    },
    {
        img:"05.webp",
        nome: "Avengers",
        descrizione: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Avenger",
    }


]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(i=0; i<imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i].img}">
    </div> <h2 class="titles">${imagesArray[i].nome}</h2> <p class="descrizione">${imagesArray[i].descrizione}</p>`;
    
};

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

let titles = document.getElementsByClassName('titles');
let descrizione = document.getElementsByClassName('descrizione');

items[itemActive].classList.add('active');
titles[itemActive].classList.add('active');
descrizione[itemActive].classList.add('active');


//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
     if(itemActive < items.length - 1){
          items[itemActive].classList.remove('active');
          circles[itemActive].classList.remove('active');
          titles[itemActive].classList.remove('active');
          descrizione[itemActive].classList.remove('active');
  
          //incremento il suo valore di 1
          itemActive++;
  
          //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
          //stessa cosa per i cerchi
          items[itemActive].classList.add('active');
          circles[itemActive].classList.add('active');
          titles[itemActive].classList.add('active');
          descrizione[itemActive].classList.add('active');
          console.log(itemActive);

          
     }else{
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        titles[itemActive].classList.remove('active');
        descrizione[itemActive].classList.remove('active');

        itemActive = 0;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        titles[itemActive].classList.add('active');
        descrizione[itemActive].classList.add('active');
     };


});

prev.addEventListener('click', function(){
   
    if(itemActive > 0){
        //verifico l'elemento attivo (itemActive)
            items[itemActive].classList.remove('active');
            circles[itemActive].classList.remove('active');
            titles[itemActive].classList.remove('active');
            descrizione[itemActive].classList.remove('active');
    
            //decremento il suo valore di 1
            itemActive--;
    
            items[itemActive].classList.add('active');
            titles[itemActive].classList.add('active');
            descrizione[itemActive].classList.add('active');
             //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
             //stessa cosa per i cerchi
            circles[itemActive].classList.add('active');
            console.log(itemActive);

            
    } else{
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        titles[itemActive].classList.remove('active');
        descrizione[itemActive].classList.remove('active');

        itemActive = items.length -1;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        titles[itemActive].classList.add('active');
        descrizione[itemActive].classList.add('active');
    }
});


