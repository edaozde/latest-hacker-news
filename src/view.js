
//VIEW

//Stories

const newsWrapper = document.querySelector("#news-wrapper");
const totalStoriesEl = document.querySelector("#total-stories");
const newSection = document.querySelector(".news-section");

totalStoriesEl.innerText = "500";

function getTime() {
  const date = new Date();
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

export function displayTenStories(array) {
  array.forEach((story) => {
    const unixTimestamp = story.time;
    const date = new Date(unixTimestamp * 1000);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois sont indexés à partir de 0, donc nous ajoutons 1.
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    const time = getTime();

    const html = `
    <div class="story">
      <a class="story-title" href="${story.url}">${story.title}</a>
      <p class="story-date">${formattedDate}</p>
      <p class="story-author">AUTHOR: ${story.by}</p>
    </div>`;

    //création d'un nouvel élément div ajouté comme enfant de newsWrapper
    const div = document.createElement("div");
    div.innerHTML = html;
    newsWrapper.appendChild(div);
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
