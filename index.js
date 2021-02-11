window.history.pushState("hello", "LOL", "/join")

const codeRollerNetlifyApp = "https://code-roller.netlify.app/"

if(window.location.href != codeRollerNetlifyApp){
    window.location.href = codeRollerNetlifyApp
}
