import Game from "./classes/game.js";
import Player from "./classes/player.js";
import Question from "./classes/question.js";

const game = new Game();
const player = new Player();
const question = new Question();



document.addEventListener('DOMContentLoaded', () => {
  game.header();
  game.welcomeScreen();
  game.footer();
});
