import TypeWriter from "./writer.js"
import isUserMobileBrowser from './mobile.js'

// the text hello world
// selected for typewriting text
const text = document.querySelector(".text")

// the typewriter text effect
const typeWriterText = new TypeWriter(
  text,
  100
)

// start the typewriter effect
typeWriterText.startTypingEffect()

// join discord modal box
var modal = document.getElementById('id01');

const switchBackGroundColor = (color) => {
  document.body.style.backgroundColor = color.toString()
}

setTimeout(function() {
    if(!isUserMobileBrowser()) {
      modal.style.display = "block"
      // switchBackGroundColor("rgba(0,0,0,0.5)")
    }
}, 5000)


