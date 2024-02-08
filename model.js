import { displayTenStories, displayError } from "./main.js";

//MODEL

function handleError(error) {
  console.error(error);
  displayError();
}

//récupération des ids des NOUVELLES histoires
async function fetchStoriesIds() {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    );

    if (!response.ok) {
      throw new Error(`Server response: ${response.status}`);
    }

    const ids = response.json();
    return ids;
  } catch (error) {
    handleError(error);
  }
}

//récupération d'un id spécifique d'une histoire
async function fetchStory(id) {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );

    if (!response.ok) {
      throw new Error(`Server response: ${response.status}`);
    }

    const story = response.json();

    return story;
  } catch (error) {
    handleError(error);
  }
}

//je veux récupérer 10 histoires , je fetch tous les id
export async function fetchTenStories(index) {
  try {
    //on recupère les 10 premieres nouvelles histoires
    const ids = await fetchStoriesIds();

    // Calcul du début et de la fin de la plage d'indices
    //si index = 1, alors on commence à ajouter +10 histoires à partir de 10
    const start = index * 10;
    const end = start + 10;

    // Extraction des 10 identifiants à partir du tableau
    const slicedIds = ids.slice(start, end);

    // Récupération des histoires pour les 10 identifiants, on attend qu'elles soient toutes récupérées pour les afficher
    const tenStories = await Promise.all(slicedIds.map((id) => fetchStory(id)));

    // Affichage des histoires
    displayTenStories(tenStories);

    return tenStories;
  } catch (error) {
    // Affichage de l'erreur
    handleError(error);
  }
}
