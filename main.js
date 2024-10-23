
//User score
let userCurrentScore = 0;

//Dom elements
const userScoreHTML = document.querySelector(".score");
const userClicks = document.querySelector(".cookie-btn")

userClicks.addEventListener("click", () => {
    userCurrentScore ++
    console.log(userCurrentScore)
    userScoreHTML.textContent = `${userCurrentScore}`
})

