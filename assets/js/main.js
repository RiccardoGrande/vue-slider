//Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue




const { createApp } = Vue

createApp({
    /* option object */
  data() {
    return {
      message: 'Hello Vue!',
      contentStyle: 'content'
    }
  }
}).mount('#app')


const images = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);

const rowEl = document.querySelector('.row')

let activeImage = 0;

for (let i = 0; i < images.length; i++) {
    const thisImage = images[i];
    console.log(thisImage);
    //Organizzare i singoli membri in card/schede
    const markup = `
        `
    rowEl.innerHTML += markup

}




// selezioniamo tutte le slide
const slideImagesElements = document.querySelectorAll('.col > .card ')  
    console.log(slideImagesElements);

// creiamo la funzione per attivazione del click per next

const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function () {
  console.log('cliccato next');

   // selezioniamo la slide corrente
   const currentSlide = slideImagesElements[activeImage]
   console.log(currentSlide);

   // rimuoviamo le classi active dalle immagini in active
   currentSlide.classList.remove('active')

   // aumentiamo il valore della variabile activeImage
   // activeImage -> 4
   activeImage++ // -> 5

   // images -> 5 elementi -> 1 [0] ... 5 [4] -> length = 5
    if ( activeImage > images.length - 1) {

        activeImage = 0;
    }

   // selezioniamo la slide successiva
   console.log(activeImage);
   const nextImage = slideImagesElements[activeImage]

   // aggiungiamo la classe active
   console.log(nextImage);
   nextImage.classList.add('active')

})


// creiamo la funzione per attivazione del click per prev
const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function () {
  console.log('cliccato prev');

  console.log(slideImagesElements); 

  // selezioniamo la slide corrente
  const currentSlide = slideImagesElements[activeImage]
  console.log(currentSlide);

  // rimuoviamo le classi active dalle immagini in active
  currentSlide.classList.remove('active')

  // diminuiamo il valore della variabile activeImage
  activeImage-- 

  if ( activeImage < 0 ) {

    activeImage = 4;
}

  // selezioniamo la prossima slide
  console.log(activeImage);
  const nextImage = slideImagesElements[activeImage]

  // aggiungiamo la classe active
  console.log(nextImage);
  nextImage.classList.add('active')

})