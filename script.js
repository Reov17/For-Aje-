const poems = [
`I don’t even know if you’ll ever read this Aje.
But if you do… I just want you to know, 
I still think about you sometimes.

We both tried. We both cared. 
But the universe just never gave us 
enough space to become “us.”

I just wonder… if we had met 
at a different point in life, 
would the ending have been different?

-Revii`,

`Oo maaaring ikaw maaari ring iba,
Sa magulong mundo, nahanap kita. 
Nahagilap at puso'y napayapa. 
Tanging daing ikaw'y makasama. 
Na sana maaaring ikaw na. 

Iba ang dating kapag kausap ka. 
Hindi inaasahang ako'y napahanga. 
bukod sa iyong kagandahan.
kundi dahil kakaiba ka.

Ako'y napatanong, ikaw ba'y kaloob? 
O panibagong yugto lang sa buhay ko? 
Tanong na siyang hindi ko masasagot.
Sapagka't hindi ko alam ang tulot. 

Ngunit sa panata ko lahat isasambitla. 
Tanging Ama ang siyang bahala. 
Kung tayo ba'y magkakatugma, 
O iba ang siyang ipagkakaloob niya.

Andito lang ako Aje kahit wala kana.
babantayan pa rin kita kahit di na tayong dalwa.
Oo, Mahal pa rin kita pero bawal diba.
Ngunit andito lang ako mag-aantay hangang pwede na.

-Revii`
];

let i = 0;
let message = "";
let poemIndex = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("text").textContent += message.charAt(i);
    i++;
    setTimeout(typeWriter, 65);
  } else {
    document.querySelector(".cursor").style.display = "none";

    // move -Revii to right corner
    const textEl = document.getElementById("text");
    let content = textEl.textContent;
    if (content.includes("-Revii")) {
      content = content.replace("-Revii", "");
      textEl.textContent = content;
      const authorEl = document.createElement("span");
      authorEl.className = "author";
      authorEl.textContent = "-Revii";
      document.getElementById("letter").appendChild(authorEl);
    }

    if (poemIndex === 0) {
      document.getElementById("btn2").style.display = "inline-block";
    }
  }
}

function showLetter(index) {
  poemIndex = index;
  message = poems[index];
  i = 0;

  document.getElementById("letter").style.display = "block";
  document.getElementById("title").style.display = "none";
  document.getElementById("text").textContent = "";
  document.querySelector(".cursor").style.display = "inline-block";
  document.getElementById("buttons").style.display = "none";

  // remove old author if exists
  const oldAuthor = document.querySelector(".author");
  if (oldAuthor) oldAuthor.remove();

  typeWriter();

  setTimeout(() => {
    if (index === 0) {
      document.getElementById("buttons").style.display = "flex";
      document.getElementById("btn1").style.display = "none";
    } else {
      document.getElementById("buttons").style.display = "none";
    }
  }, message.length * 65 + 500);
}
