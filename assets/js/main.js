//Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue




const { createApp } = Vue

createApp({
    /* option object */
  data() {
    return {
      activeImage: 0,
      games:{

        images: [

            './assets/img/01.webp',
            './assets/img/02.webp',
            './assets/img/03.webp',
            './assets/img/04.webp',
            './assets/img/05.webp'
        ],
        title: [

            'Marvel\'s Spiderman Miles Morale',
            'Ratchet & Clank: Rift Apart',
            'Fortnite',
            'Stray',
            "Marvel's Avengers",
        ],
        text: [

            'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        ]

        console.log(games);
    }
    
}
},
methods: {
    
}

}).mount('#app')





/* 
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

}) */