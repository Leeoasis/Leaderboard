import './style.css';
import REQUESTS from '../modules/api.js';

const form = document.querySelector('#form');
const refreshBtn = document.querySelector('.refresh');

document.addEventListener('DOMContentLoaded', () => {
  REQUESTS.displayScores();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  REQUESTS.createNewScore();
  REQUESTS.clearForm();
});
refreshBtn.addEventListener('click', () => {
  REQUESTS.displayScores();
});