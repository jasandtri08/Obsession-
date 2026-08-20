const game = document.getElementById("game");
const music = document.getElementById("music");

game.innerHTML = `
  <div class="sparkles">✦ ✧ ✦</div>

  <img src="Images22/Ribbons and cherries.png" class="ribbons">
  <img src="Images22/Skulls and love.png" class="skulls">
  <img src="Images22/Skulls left.png" class="skull">
  <img src="Images22/Pictureoflace.png" class="lace">
  <img src="Images22/Deadrose.png" class="rose">
  <img src="Images22/Deadrose.png" class="dead">

  <h1>MANIA</h1>

  <button id="startButton">𓆩♡𓆪 ENTER 𓆩♡𓆪</button>

  <div class="quote">
    You loved her once. You will love her again.
  </div>
`;

const startButton = document.getElementById("startButton");


// 🎵 MUSIC BUTTON
function createMusicButton() {

  // Don't create another one if it already exists
  if (document.getElementById("musicButton")) return;

  const musicButton = document.createElement("button");

  musicButton.id = "musicButton";
  musicButton.textContent = "𓆩♫𓆪";

  document.body.appendChild(musicButton);

  musicButton.addEventListener("click", () => {

    if (music.paused) {

      music.play()
        .then(() => {
          musicButton.textContent = "𓆩♫𓆪";
        })
        .catch(() => {
          console.log("Music could not play.");
        });

    } else {

      music.pause();
      musicButton.textContent = "𓆩⏸𓆪";

    }

  });
}


// ❤️ ENTER
startButton.addEventListener("click", function () {

  // Start music
  music.volume = 0.5;

  music.play().catch(() => {
    console.log("Music needs manual play.");
  });

  // Create tiny music control
  createMusicButton();

  // Hide ENTER
  startButton.style.display = "none";


  // ⏳ OPENING DOTS
  const opening = document.createElement("div");

  opening.id = "opening";

  opening.innerHTML = `
    <div class="dots">• • •</div>
  `;

  game.appendChild(opening);


  // After 10 seconds → story
  setTimeout(() => {

    opening.remove();

    showStory();

  }, 10000);

});


// 📖 STORY
function showStory() {

  game.innerHTML = `
    <div id="story">

      <img src="Images22/Intricate.png" class="intricate top-left">
      <img src="Images22/Intricate.png" class="intricate top-right">
      <img src="Images22/Intricate.png" class="intricate bottom-left">
      <img src="Images22/Intricate.png" class="intricate bottom-right">

      <div class="story-text">

        <p id="line1">She was beautiful</p>

        <p id="line2">You loved her</p>

        <p id="line3">You killed her</p>

      </div>

    </div>
  `;


  // Story lines appear
  setTimeout(() => {
    document.getElementById("line1").classList.add("show");
  }, 500);

  setTimeout(() => {
    document.getElementById("line2").classList.add("show");
  }, 3000);

  setTimeout(() => {
    document.getElementById("line3").classList.add("show");
  }, 5500);


  // Story lines disappear
  setTimeout(() => {

    document.getElementById("line1").classList.add("hide");
    document.getElementById("line2").classList.add("hide");
    document.getElementById("line3").classList.add("hide");

  }, 7500);


  // 🔴 TURN RED
  setTimeout(() => {

    game.classList.add("blood");

  }, 6000);


  // 👁️ EYES + ROSE
  setTimeout(() => {

    // Remove corner decorations
    document.querySelectorAll(".intricate").forEach(design => {
      design.classList.add("fade-out");
    });


    // Eyes
    const eyes = document.createElement("img");

    eyes.src = "Images22/Eyes open.png";
    eyes.className = "creeping-eyes";

    game.appendChild(eyes);


    setTimeout(() => {
      eyes.classList.add("visible");
    }, 100);


    // Rose
    const rose = document.createElement("img");

    rose.src = "Images22/Bw rose.png";
    rose.className = "between-rose";

    game.appendChild(rose);


    setTimeout(() => {
      rose.classList.add("visible");
    }, 2000);


    // "why?"
    const why = document.createElement("div");

    why.className = "why";
    why.textContent = "why?";

    game.appendChild(why);


    setTimeout(() => {
      why.classList.add("visible");
    }, 6000);


    // Fade everything out
    setTimeout(() => {

      why.classList.remove("visible");

      eyes.classList.add("fade-out");
      rose.classList.add("fade-out");

    }, 10400);


    // 🌸 TURN PINK AGAIN
    setTimeout(() => {

      game.classList.remove("blood");
      game.classList.add("tarot");

    }, 12400);


    // 🃏 TAROT INTRO
    setTimeout(() => {

      const tarotIntro = document.createElement("div");

      tarotIntro.className = "tarot-intro";
      tarotIntro.textContent =
        "There are three cards in this story";

      game.appendChild(tarotIntro);


      setTimeout(() => {
        tarotIntro.classList.add("visible");
      }, 100);

    }, 13000);


    // 🃏 TAROT CARDS + CLOUDS
    setTimeout(() => {
      

      const cards = document.createElement("div");

      cards.className = "tarot-cards";

      cards.innerHTML = `
        <img src="Images22/Tarot1.png" class="tarot-card">
        <img src="Images22/Tarot2.png" class="tarot-card">
        <img src="Images22/Tarot3.png" class="tarot-card">
      `;


      const clouds = document.createElement("div");

      clouds.innerHTML = `
        <img src="Images22/Cloud1.png" class="tarot-cloud cloud1">
        <img src="Images22/Cloud2.png" class="tarot-cloud cloud2">
        <img src="Images22/Cloud3.png" class="tarot-cloud cloud3">
      `;


      game.appendChild(clouds);
      game.appendChild(cards);

    }, 16000);


    // ☾ CHOOSE ONE
    setTimeout(() => {

      const choose = document.createElement("div");

      choose.className = "choose";
      choose.textContent = "Choose one... and wisely";

      game.appendChild(choose);


      setTimeout(() => {
        choose.classList.add("visible");
      }, 100);

    }, 18000);


    // 👁️ BLINKING
    function blink() {

      eyes.src = "Images22/Eyes closed.png";


      setTimeout(() => {

        eyes.src = "Images22/Eyes open.png";

      }, 700);


      const nextBlink =
        Math.random() * 5000 + 4000;

      setTimeout(blink, nextBlink);

    }


    // First blink
    setTimeout(blink, 3500);

  }, 7500);

}