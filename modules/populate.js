const data = [
  {
    name: 'Name',
    score: 64,
  },
  {
    name: 'Name',
    score: 96,
  },
  {
    name: 'Name',
    score: 34,
  },
  {
    name: 'Name',
    score: 43,
  },
  {
    name: 'Name',
    score: 34,
  },
  {
    name: 'Name',
    score: 56,
  },
];

const list = document.querySelector('#populate');
let result = '';
export default class UI {
    static display = () => {
      data.map((score) => {
        result += `
              <li>${score.name}:${score.score}</li>
            `;
        return result;
      });

      list.innerHTML = result;
      return result;
    }
}