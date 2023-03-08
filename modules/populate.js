

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