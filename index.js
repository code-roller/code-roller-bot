window.history.pushState("hello", "LOL", "/join")

const codeRollerNetlifyApp = "code-roller.netlify.app"

if(window.location.href != codeRollerNetlifyApp){
    window.location.href = codeRollerNetlifyApp
}