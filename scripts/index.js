import TypeWriter from "./writer.js"
import isUserMobileBrowser from './mobile.js'

const DISCORD_INVITE_URL = "https://discord.gg/vzcNRVrHR5"

// the text hello world
// selected for typewriting text
const text = document.querySelector(".text")
const discordJoinButton = document.querySelector(".joinbtn")

// the typewriter text effect
const typeWriterText = new TypeWriter(
  text,
  100
)

// start the typewriter effect
typeWriterText.startTypingEffect()

// join discord modal box
var modal = document.getElementById('id01');

export const switchBackGroundColor = (color) => {
  document.body.style.backgroundColor = color.toString()
}

export const openNewWindow = function(url) {
  window.open(
    url,
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
}

// setTimeout(function() {
//     if(!isUserMobileBrowser()) {
//       modal.style.display = "block"
//       // switchBackGroundColor("rgba(0,0,0,0.5)")
//     }
// }, 5000)


discordJoinButton.addEventListener('click', function() {
  openNewWindow(DISCORD_INVITE_URL)
})
