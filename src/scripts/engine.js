const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type")
    },
    fiedlCards: {
        player: document.getElementById("player-field-card"),
        computar: document.getElementById("computar-field-card")
    },
    actions: {
        button: document.getElementById("next-duel")
    }
}



function init() {}


init();