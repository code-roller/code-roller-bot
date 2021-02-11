window.history.pushState("hello", "LOL", "/join")

const codeRollerNetlifyApp = "https://code-roller.netlify.app/"

const editRedirectLink = (redirectLink, newRedirectLink){
    if(redirectLink != newRedirect){
        codeRollerNetlifyApp = newRedirectLink.toString()
    }
}

const pushToHistory = (joinUrl) => {
    window.history.pushState(
        "hello",
        "title",
        joinUrl.toString()
        )
}

if(window.location.href != codeRollerNetlifyApp){
    window.location.href = codeRollerNetlifyApp
}
