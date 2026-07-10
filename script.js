const enterBtn = document.getElementById("enterBtn");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");
const proposal = document.getElementById("proposal");
const nextBtn = document.getElementById("nextBtn");

const music = document.getElementById("music");
const slide = document.getElementById("slide");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

// Photos
const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg"
];

let index = 0;

// Enter Website
enterBtn.onclick = () => {
  welcome.style.display = "none";
  main.style.display = "flex";
  music.play();
};

// Slideshow
setInterval(() => {
  index++;
  if(index >= photos.length){
    index = 0;
  }
  slide.src = photos[index];
},3000);

// Continue Button
nextBtn.onclick = () => {
  main.style.display = "none";
  proposal.style.display = "flex";
};

// Yes Button
yes.onclick = () => {
confetti({
  particleCount: 200,
  spread: 100,
  origin: { y: 0.6 }
});
document.body.innerHTML = `
<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:linear-gradient(135deg,#ff4d88,#ff99cc);
color:white;
font-family:Arial;
text-align:center;
padding:20px;
">

<h1 style="font-size:45px;">❤️ Yayyyy! ❤️</h1>

<h2>Thank You Smita 🥹💖</h2>

<p style="font-size:22px;line-height:1.8;">
You just made me the happiest person. ❤️<br><br>
I promise to always respect you,<br>
care for you and make you smile. 🌹
</p>

<h1>💍 Forever Starts Today 💍</h1>

</div>
`;

};

// Moving No Button
no.addEventListener("mouseover",moveButton);
no.addEventListener("touchstart",moveButton);

function moveButton(){

const x = Math.random()*(window.innerWidth-120);

const y = Math.random()*(window.innerHeight-80);

no.style.left=x+"px";
no.style.top=y+"px";

}
