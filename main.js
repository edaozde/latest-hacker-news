import { fetchTenStories } from "./news.js";

//VIEW

//Stories
const newsWrapper = document.querySelector("#news-wrapper");
const displayedStoriesEL = document.querySelector("#displayed-stories");
const totalStoriesEl = document.querySelector("#total-stories");
const newSection = document.querySelector(".news-section");

totalStoriesEl.innerText = "500";

export function displayTenStories(array) {
  array.forEach((story) => {
    const unixTimestamp = story.time;
    const date = new Date(unixTimestamp * 1000).toDateString();

    const html = `
    <div class="story">
      <a class="story-title" href="${story.url}">${story.title}</a>
      <p class="story-date">${date}</p>
      <p class="story-author">Author: ${story.by}</p>
    </div>`;
  
    newsWrapper.insertAdjacentHTML("beforeend", html);
  });
}

export function displayError() {
  const errorHtml = `
      <div class="error-message">
          <p>Something went wrong.</p>
          <p>Please reload the page.</p>
      </div>
      `;
  newSection.innerHTML = errorHtml;
}

//CONTROLLER

//Stories
let currentIndex = 0;

window.onload = function () {
  fetchTenStories(currentIndex);
  displayedStoriesEL.innerText = (currentIndex + 1) * 10;
};

