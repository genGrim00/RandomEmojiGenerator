
const button = document.querySelector(".btn-js");
const emojiName = document.querySelector(".emojiName");

const emoji = [];
const url = "https://emoji-api.com/emojis?access_key=34388ba024ea1a050f50e659111958e606e3bd19"

async function getEmoji() {
  let response = await fetch(url);
  let data = await response.json();

  for(let i = 0; i<1300; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName
    })
  }
}
getEmoji();

button.addEventListener(('click'), ()=>{
  const randomNumber = Math.floor(Math.random() * emoji.length);
  button.innerText = emoji[randomNumber].emojiName;
  emojiName.innerText = emoji[randomNumber].emojiCode;
});