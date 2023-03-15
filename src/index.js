import './style.css';
import Games from './modules/games.js';

const form = document.getElementById('addForm');
const player = document.getElementById('player');
const playerScore = document.getElementById('player-score');
const scoreContainer = document.querySelector('.container-scores');
const reloadBtn = document.querySelector('.refresh');

const game = new Games();

const update = async () => {
  const allData = await game.getPlayer();
  let html = '';
  for (let i = 0; i < allData.result.length; i += 1) {
    const singleData = allData.result[i];
    html += `<li class="single-score">${singleData.user}: ${singleData.score}</li>`;
  }
  scoreContainer.innerHTML = html;
};

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally
  const playerName = player.value;
  const playerScoreInd = playerScore.value;
  await game.addPlayer(playerName, playerScoreInd);

  player.value = '';
  playerScore.value = '';
  update();
});

reloadBtn.addEventListener('click', update());

window.onload = () => update();