import { fetchTenStories } from "./model.js";

const loadMoreBtn = document.querySelector("#load-more-btn");
const displayedStoriesEL = document.querySelector("#displayed-stories");



//CONTROLLER

//Stories
let currentIndex = 0;


//attendre que la fenetre soit entièrement chargée
window.onload = function () {
  fetchTenStories(currentIndex);
  displayedStoriesEL.innerText = (currentIndex + 1) * 10;
};


// //fetchTenStories(currentIndex++);: À chaque clic sur le bouton "Load More", 
// cette ligne appelle la fonction fetchTenStories 
// en passant l'indice actuel et incrémente ensuite currentIndex pour obtenir le prochain ensemble de dix histoires.
let loadMore = () => {
  fetchTenStories(currentIndex++);


  //nombre de stories total
  displayedStoriesEL.innerText = (currentIndex + 1) * 10;

  if (currentIndex === 49) {
    loadMoreBtn.removeEventListener("click", loadMore);
    loadMoreBtn.style.display = "none";
  }
};

loadMoreBtn.addEventListener("click", loadMore);
