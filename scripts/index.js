import TypeWriter from "./writer.js"

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