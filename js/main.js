//create arrray of prompt and response cards
var answer = '____'
var awesomePoints = 0
var blackCards = [
    "Where do I find Dr. Bloom? " + answer,
    "You don't agree to have a " + answer + " built inside you if your lifes going great.",
    "No, Jacob is your mother's lover. I watch them. Almost always dressed as " + answer + ".",
    "Gonorrhea can't see us if we don't " + answer + ".",
    "Showtime extreme in a world where man evolved from " + answer + ".",
    "You think you can control me with a " + answer + ".",
    "Bobby Moynihan didn't get along with which SNL cast member? " + answer,
    "Welcome to your " + answer +", bitch!",
    "What were Snuffles first words? " + answer,
    "The guy teaches H.S. math. I didn't take him for a " + answer + ".",
    "They're just " + answer + ", Morty.",
    "It's a new machine. Detects " + answer + " all the way up your butt.",
    "Did you get those " + answer + " all the way up your butt?",
    "You want to stuff it under a mattress like " + answer + ".",
    "You " + answer + " Morty. Not very charismatic.",
    "Look at that thing. It defies all logic. What is that thing? " + answer,
    "How did Frank Policky die? " + answer,
    "What do you think of this flying vehicle Morty? I made it out of " + answer + ".",
    "I had to do it Morty. I made a " + answer + "."
]
var answers = [
    "Nutrino bomb.",
    "Night time takes up half of all time.",
    "My little Morties.",
    "Holy Crap! Morty, run!",
    "Principal Vagina. No relation.",
    "You're like Hitler, but even Hitler cared about Germany or something.",
    "Interdimensional Portal Device.",
    "Take these seeds and put them waaaaaay up in your butthole.",
    "Taut anal cavity.",
    "Flim flam.",
    "Albert Eindouche.",
    "Megaseeds dissolving in your anal cavity.",
    "It's a lot like inception, except it'll make sense.",
    "Tiny RIIIIIIIIICK!!!",
    "Pickle Riiiiiiiiiiick!!!",
    "Scary Terry, the legally safe knock of of an 80s horror character.",
    "Garmanarnar.",
    "Schezuan sauce.",
    "Caaaaaan do.",
    "I'm Mr. Meseeks, look at me.",
    "An amusement park inside a human body.",
    "Pirates of the Pancreas.",
    "The Sphincter Dam.",
    "People on the internet who are only turned on by cartoons of japanese teenagers.",
    "Interdimensional cable.",
    "A stuffed teddy bear that poops spider webs.",
    "A sex robot.",
    "A mexican space armada with weapons made from tomatoes.",
]

//select random index number to display in black card prompt
function shuffle(array) {
   var i = Math.floor(Math.random() * array.length)
   return array[i]
}

//get random prompt from blackCards array and input into the DOM
function setBlack() {
    //select index
    var prompt = shuffle(blackCards)
    //display string in the DOM
    document.querySelector('.prompt').innerText = prompt
    //remove index from array
    blackCards.splice(blackCards.indexOf(prompt), 1)
}

setBlack()

//create array of responses
var responses = []
for (var i = 0; i < 10; i += 1) {
    //select random index
    responses.push(shuffle(answers))
    //remove index from the array
    answers.splice(answers.indexOf(responses[i]), 1)
}

//splice responses in half and distribute to both players
var $playerOneCards = $('#player-one-cards')
var $playerTwoCards = $('#player-two-cards')

//first half of responses goes to player one
var cards1 = responses.splice(0, 5)

//loop through and create list items for each answer with input
cards1.forEach(function(i) {
    var $answer = $('<li>')
    var $sendIt = $('<input>').attr('type', 'checkbox')
    $answer.text(i)
    $playerOneCards.append($answer)
    $answer.prepend($sendIt)  
})

//leftover responses go to player two
var cards2 = responses

//loop through and create list items for each answer with input
cards2.forEach(function(i) {
    var $answer = $('<li>')
    var $sendIt = $('<input>').attr('type', 'checkbox')
    $answer.text(i)
    $playerTwoCards.append($answer)
    $answer.prepend($sendIt)  
})

//set up turns to see which player is picking a card
var game = {
    player1: 'NoobNoob',
    player2: 'Mr. Poopybutthole'
}
game.currentPlayer = game.player1
function switchTurns() {
    if (game.currentPlayer === game.player1) {
        game.currentPlayer = game.player2
    } else {
        game.currentPlayer = game.player1
    }
}

//let player one see their cards and select which one to play
var playerOneResponse = ''
var playerTwoResponse = ''
function pickOne() {
    if (game.currentPlayer === game.player1) {
        $playerOneCards.parent().removeClass('hidden-cards')
        $playerTwoCards.parent().addClass('hidden-cards')
    } else {
        $playerTwoCards.parent().removeClass('hidden-cards')
        $playerOneCards.parent().addClass('hidden-cards')
    }
}

var $submit = $('input').on('click', function() {
    playerOneResponse = $(this).parent().text()
    $(this).parent().remove()
    switchTurns()
    pickOne()
    playerTwoResponse = $(this).parent().text()
    $(this).parent().remove()
})