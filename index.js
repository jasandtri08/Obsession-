const game = document.getElementById("game");

const music = document.getElementById("music");

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

  music.volume = 0.5;
  music.play();

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

  document.getElementById("line1").classList.add("hide");
  document.getElementById("line2").classList.add("hide");
  document.getElementById("line3").classList.add("hide");

}, 7500);

setTimeout(() => {
  game.classList.add("blood");
}, 6000);
// 👁️ EYES
setTimeout(() => {
  document.querySelectorAll(".intricate").forEach(design => {
  design.classList.add("fade-out");
});

  const eyes = document.createElement("img");

  eyes.src = "Eyes open.png";
  eyes.className = "creeping-eyes";

  game.appendChild(eyes);

  setTimeout(() => {
    eyes.classList.add("visible");
  }, 100);
  const rose = document.createElement("img");

rose.src = "Bw rose.png";
rose.className = "between-rose";

game.appendChild(rose);

setTimeout(() => {
  rose.classList.add("visible");
}, 2000);
  const why = document.createElement("div");

why.className = "why";
why.textContent = "why?";

game.appendChild(why);

setTimeout(() => {
  why.classList.add("visible");
}, 6000);
  setTimeout(() => {

  why.classList.remove("visible");

  eyes.classList.add("fade-out");
  rose.classList.add("fade-out");

}, 10400);
  setTimeout(() => {

  game.classList.remove("blood");
  game.classList.add("tarot");

}, 12400);
  
  setTimeout(() => {

  const tarotIntro = document.createElement("div");

  tarotIntro.className = "tarot-intro";
  tarotIntro.textContent = " There are three cards in this story ";

  game.appendChild(tarotIntro);

  setTimeout(() => {
    tarotIntro.classList.add("visible");
  }, 100);

}, 13000);
  setTimeout(() => {

  const cards = document.createElement("div");

  cards.className = "tarot-cards";

  cards.innerHTML = `
    <img src="Tarot1.png" class="tarot-card">
    <img src="Tarot2.png" class="tarot-card">
    <img src="Tarot3.png" class="tarot-card">
    
  `;
    const clouds = document.createElement("div");

clouds.innerHTML = `
  <img src="Cloud1.png" class="tarot-cloud cloud1">
  <img src="Cloud2.png" class="tarot-cloud cloud2">
  <img src="Cloud3.png" class="tarot-cloud cloud3">
`;

game.appendChild(clouds);

  game.appendChild(cards);

}, 16000);
  setTimeout(() => {

  const choose = document.createElement("div");

  choose.className = "choose";
  choose.textContent = "Choose one... and wisely";

  game.appendChild(choose);

  setTimeout(() => {
    choose.classList.add("visible");
  }, 100);

}, 18000);


  // 👁️ BLINK
  function blink() {

    eyes.src = "Eyes closed.png";

    setTimeout(() => {
      eyes.src = "Eyes open.png";
    }, 700);

    const nextBlink = Math.random() * 5000 + 4000;

    setTimeout(blink, nextBlink);
  }

  setTimeout(blink, 3500);

}, 7500);



}
