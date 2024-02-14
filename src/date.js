const now = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayOfWeek = daysOfWeek[now.getDay()];
const time = now.toLocaleTimeString('fr-FR', { hour: 'numeric', minute: 'numeric' });

const datetime = document.getElementById("datetime").innerHTML = `${dayOfWeek}, ${time}`;
