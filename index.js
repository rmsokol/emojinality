const myEmojis = ["📸", "👩🏽‍🎓", "💻", "🎮"]
const mondayEmojis = ["🤬", "☕️", "🥱"]
const fridayEmojis = ["😎", "🥳", "💆🏽‍♀️"]
const sadEmojis = ["🙍🏽‍♀️", "🥺", "💥"]

function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
        localStorage.setItem("emojicount", emoji.value)
    }
}

renderEmojis()

function emojiCount() {
    let count = document.getElementById("emoji-count")
    count.innerHTML = myEmojis.length +" " + "emojis"
}
emojiCount()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
        emojiCount()
    }
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
        emojiCount()
    }
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    myEmojis.pop()
    renderEmojis()
    emojiCount()
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmojis()
    emojiCount()
})

// function saveEmojis {
//     localStorage.setItem(myEmojis)
//     localStorage.getItem(myEmojis)
// }