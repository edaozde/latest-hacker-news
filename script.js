import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  // Accéder à la page d'accueil
  let homepage = http.get('http://127.0.0.1:5500/index.html');

  // Attendre un court instant
  sleep(1);

  // Appel à l'API Hacker News
  let hackerNews = http.get('https://api.hackernews.io/news');

  // Attendre un court instant
  sleep(1);
}
