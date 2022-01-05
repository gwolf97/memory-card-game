const boardGame = document.querySelector(".board")
const board = [
    {
        name: 'bulbasaur',
        img: 'img/bulbasaur.png'
    },
    {
        name: 'bulbasaur',
        img: 'img/bulbasaur.png'
    },
    {
        name: 'charmander',
        img: 'img/charmander.png'
    },
    {
        name: 'charmander',
        img: 'img/charmander.png'
    },
    {
        name: 'dialga',
        img: 'img/dialga.png'
    },
    {
        name: 'dialga',
        img: 'img/dialga.png'
    },
    {
        name: 'mew',
        img: 'img/mew.png'
    },
    {
        name: 'mew',
        img: 'img/mew.png'
    },
    {
        name: 'pikachu',
        img: 'img/pikachu.png'
    },
    {
        name: 'pikachu',
        img: 'img/pikachu.png'
    },
    {
        name: 'rayquaza',
        img: 'img/rayquaza.png'
    },
    {
        name: 'rayquaza',
        img: 'img/rayquaza.png'
    },
]

board.sort(() => 0.5 - Math.random())


let cardsChosen = []
let cardsChosenId = []
let scoreKeep = []


const createBoard = function(){
    for(let object of board){
        const card = document.createElement("img")
        card.setAttribute('src', 'img/pokeball.png')
        card.setAttribute('data-id', board.indexOf(object))
        card.addEventListener("click", flipCard)
        boardGame.append(card)
        
    }
}

createBoard()

function flipCard(){
    const cardId = this.getAttribute('data-id')
    if (cardsChosenId[0] === cardId){
        return
    }else{
    cardsChosen.push(board[cardId].name)
    cardsChosenId.push(cardId)
    }
    this.setAttribute('src', board[cardId].img)
    if (cardsChosen.length === 2){
       setTimeout(checkMatch, 500)
    }

}

function checkMatch(){
    let cards = document.querySelectorAll('img')
    const card1 = cardsChosenId[0]
    const card2 = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        cards[card1].setAttribute('src', 'img/black.jpeg')
        cards[card2].setAttribute('src', 'img/black.jpeg')
        cards[card1].removeEventListener("click", flipCard)
        cards[card2].removeEventListener("click", flipCard)
        const score = document.querySelector(".score")
        scoreKeep.push(cardsChosen)
        score.innerHTML = scoreKeep.length
        
    }else{
        cards[card1].setAttribute('src', 'img/pokeball.png')
        cards[card2].setAttribute('src', 'img/pokeball.png')
    }
    cardsChosen = []
    cardsChosenId = [] 
    
    if (scoreKeep.length === board.length/2){
        alert('Congatulations! You found them all!')
    }
}