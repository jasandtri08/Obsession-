const game = document.getElementById("game");

game.innerHTML = `
  <div class="sparkles">✦ ✧ ✦</div>

  <img src="Ribbons and cherries.png" class="ribbons">
  <img src="Skulls and love.png" class="skulls">
  <img src="Skulls left.png" class="skull">
  <img src="Pictureoflace.png" class="lace">
  <img src="Deadrose.png" class="rose">

  <img src="Deadrose.png" class="dead">

  <h1>MANIA</h1>

  <button id="startButton">𓆩♡𓆪 ENTER 𓆩♡𓆪</button>

  <div class="quote">
    You loved her once. You will love her again.
  </div>
`;

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function () {

  startButton.style.display = "none";

  const opening = document.createElement("div");
  opening.id = "opening";

  opening.innerHTML = `
    <div class="dots">• • •</div>
  `;
 

  game.appendChild(opening);

  setTimeout(() => {

    opening.remove();

    showStory();

  }, 10000);

});
function showStory() {
  

  game.innerHTML = `
    <div id="story">

      <img src="Intricate.png" class="intricate top-left">
      <img src="Intricate.png" class="intricate top-right">
      <img src="Intricate.png" class="intricate bottom-left">
      <img src="Intricate.png" class="intricate bottom-right">

      <div class="story-text">

        <p id="line1">She was beautiful</p>

        <p id="line2">You loved her</p>

        <p id="line3">You killed her</p>

      </div>

    </div>
  `;

  setTimeout(() => {
    document.getElementById("line1").classList.add("show");
  }, 500);

  setTimeout(() => {
    document.getElementById("line2").classList.add("show");
  }, 3000);

  setTimeout(() => {
    document.getElementById("line3").classList.add("show");
  }, 5500);

setTimeout(() => {
  game.classList.add("blood");
}, 6000);
}
