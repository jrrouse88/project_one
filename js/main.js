//create arrray of cue and response cards
var nnSound = new Audio('noob.mp3')
var blackCards = {
    answer: '___',
}
blackCards.cues = [
    "Where do I find Dr. Bloom? " + blackCards.answer,
    "You don't agree to have a " + blackCards.answer + " built inside you if your lifes going great.",
    "No, Jacob is your mother's lover. I watch them. Almost always dressed as " + blackCards.answer + ".",
    "Gonorrhea can't see us if we don't " + blackCards.answer + ".",
    "Showtime extreme in a world where man evolved from " + blackCards.answer + ".",
    "You think you can control me with a " + blackCards.answer + ".",
    "Bobby Moynihan didn't get along with which SNL cast member? " + blackCards.answer,
    "Welcome to your " + blackCards.answer +", bitch!",
    "What were Snuffles first words? " + blackCards.answer,
    "The guy teaches H.S. math. I didn't take him for a " + blackCards.answer + ".",
    "They're just " + blackCards.answer + ", Morty.",
    "It's a new machine. Detects " + blackCards.answer + " all the way up your butt.",
    "Did you get those " + blackCards.answer + " all the way up your butt?",
    "You want to stuff it under a mattress like " + blackCards.answer + ".",
    "You " + blackCards.answer + " Morty. Not very charismatic.",
    "Look at that thing. It defies all logic. What is that thing? " + blackCards.answer,
    "How did Frank Policky die? " + blackCards.answer,
    "What do you think of this flying vehicle Morty? I made it out of " + blackCards.answer + ".",
    "I had to do it Morty. I made a " + blackCards.answer + ".",
    "I'll buy those boobies for " + blackCards.answer + ".",
    "And that's the waaaaaay the " + blackCards.answer + " goes.",
    "I throw balls far. You want words, date a " + blackCards.answer + ".",
    "Break the cycle Morty. Rise above. Focus on " + blackCards.answer + ".",
    "We're both insecure enough to agree to a " + blackCards.answer + ".",
    "It might eat brains and exhale " + blackCards.answer + " for all you know.",
    "I'm the devil, what should I do if I fail? Go get " + blackCards.answer + "."
    ]
var answers = [
    "Nutrino bomb",
    "Night time takes up half of all time",
    "My little Morties",
    "Holy Crap! Morty, run!",
    "Principal Vagina. No relation",
    "You're like Hitler, but even Hitler cared about Germany or something",
    "Interdimensional Portal Device",
    "Take these seeds and put them waaaaaay up in your butthole",
    "Taut anal cavity",
    "Flim flam",
    "Albert Eindouche",
    "Megaseeds dissolving in your anal cavity",
    "It's a lot like inception, except it'll make sense",
    "Tiny RIIIIIIIIICK!!!",
    "Pickle Riiiiiiiiiiick!!!",
    "Scary Terry, the legally safe knock of of an 80s horror character",
    "Garmanarnar",
    "Schezuan sauce",
    "Caaaaaan do",
    "I'm Mr Meseeks, look at me",
    "An amusement park inside a human body",
    "Pirates of the Pancreas",
    "The Sphincter Dam",
    "People on the internet who are only turned on by cartoons of japanese teenagers",
    "Interdimensional cable",
    "A stuffed teddy bear that poops spider webs",
    "A sex robot",
    "A mexican space armada with weapons made from tomatoes",
    "Slippery stair",
    "Rapey jellybean",
    "Shmeckles",
    "Wubba Lubba Dub Duuuuuuub!!!!",
    "Shonies",
    "Herpy Herpson High School",
    "Preying Mantis insect people",
    "Cronenburg Morty",
    "Roofie juice serum",
    "Space AIDS",
    "Beauty cream that makes ugly women beautiful, but also makes the blind",
    "King Flippy Nips",
    "Beating the shit out of leash yanking dog owners and spitting on them"
]

//select random index number to display in black card prompt
function shuffle(array) {
   var i = Math.floor(Math.random() * array.length)
   return array[i]
}

//get random cue from blackCards array and input into the DOM
function setBlack() {
    //select index
    var cue = shuffle(blackCards.cues)
    //display string in the DOM
    document.querySelector('.prompt').innerText = cue
    //remove index from array
    blackCards.cues.splice(blackCards.cues.indexOf(cue), 1)
}

setBlack()

//create array of responses
var responses = []
for (var i = 0; i < 20; i += 1) {
    //select random index
    responses.push(shuffle(answers))
    //remove index from the array
    answers.splice(answers.indexOf(responses[i]), 1)
}

//splice responses in half and distribute to both players
var $playerOneCards = $('#player-one-cards')
var $playerTwoCards = $('#player-two-cards')

//first half of responses goes to player one
var cards1 = responses.splice(0, 10)

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

//let players see their cards and select which one to play
var playerOneResponse = ''
var playerTwoResponse = ''
function pickOne() {
    if (game.currentPlayer === game.player1) {
        console.log(playerOneResponse)
        $playerOneCards.parent().removeClass('hidden-cards')
        setTimeout(function() {
            $playerOneCards.parent().addClass('hidden-cards')
        }, 7000)
    } else {
        console.log(playerTwoResponse)
        $playerTwoCards.parent().removeClass('hidden-cards')
        setTimeout(function() {
            $playerTwoCards.parent().addClass('hidden-cards')
        }, 7000)
    }
}

//click function allow players to pick an answer then switches turns
var $submit = $('input').on('click', function() {
    if (game.currentPlayer === game.player1) {
        playerOneResponse = $(this).parent().text()
        $(this).parent().remove()
        console.log('playerOneResonse: ' + playerOneResponse)
        switchTurns()
    } else {
        playerTwoResponse = $(this).parent().text()
        $(this).parent().remove()
        console.log('playerTwoResponse: ' + playerTwoResponse)
        switchTurns()
    }
})

//click function to reveal answers and let a player pick
$( 'div button:nth-child(2)' ).on('click', pickOne)

//reveal player responses
$('div button:nth-child(3)').on('click', function() {
    $('.prompt').fadeOut('fast')
    var promptText = $('.prompt').text()
    $('hr').removeClass('hidden-cards')
    $('.response1').text(promptText.replace('___', playerOneResponse))
    $('.response2').text(promptText.replace('___', playerTwoResponse))
})

//set new prompt in black card
var $newCue = $('div button:nth-child(1)').on('click', function() {
    setBlack()
    $('.prompt').fadeIn('slow')
    $('hr').addClass('hidden-cards')
    $('.response1').text('')
    $('.response2').text('')
})

//player points set to zero
var points1 = 0
var points2 = 0
$playerOnePoints = $('#player-one-points').text('Blitz and Chitz Tickets: ' + Number(points1))
$playerTwoPoints = $('#player-two-points').text('Blitz and Chitz Tickets: ' + Number(points2))

//declare a winner function
function checkScore(points1, points2) {
    if(points1 === 5 || points2 === 5) {
        if(points1 > points2) {
            nnSound.play()
            var $declare = $('<h1>')
            var $rick = $('<img>')
            $rick.attr('src', 'rick.png')
            $declare.text('Player One Wins!')
            $('.winner').append($declare)
            $('.winner').append($rick)
            $('.winner').removeClass('hidden-cards')
            //alert('Player One wins!')
        } else if(points1 < points2) {
            nnSound.play()
            var $declare = $('<h1>')
            var $rick = $('<img>')
            $rick.attr('src', 'rick.png')
            $declare.text('Player One Wins!')
            $('.winner').append($declare)
            $('.winner').append($rick)
            $('.winner').removeClass('hidden-cards')
            //alert('Player Two wins!')
        } else {
            nnSound.play()
            alert("Congrats. You're both equally unfunny.")
        }
    }
}

//allocate points
var $givePoint1 = $('div button:nth-child(4)').on('click', function() {
    $playerOnePoints = $('#player-one-points').text('Blips and Chitz Tickets: ' + Number(points1 += 1))
    checkScore(points1, points2)
})

var $givePoint2 = $('div button:nth-child(5)').on('click', function() {
    $playerTwoPoints = $('#player-two-points').text('Blips and Chitz Tickets: ' + Number(points2 += 1))
    checkScore(points1, points2)
})

function initializeGame() {
    blackCards.answer = '___'
    blackCards.cues = [
        "Where do I find Dr. Bloom? " + blackCards.answer,
        "You don't agree to have a " + blackCards.answer + " built inside you if your lifes going great.",
        "No, Jacob is your mother's lover. I watch them. Almost always dressed as " + blackCards.answer + ".",
        "Gonorrhea can't see us if we don't " + blackCards.answer + ".",
        "Showtime extreme in a world where man evolved from " + blackCards.answer + ".",
        "You think you can control me with a " + blackCards.answer + ".",
        "Bobby Moynihan didn't get along with which SNL cast member? " + blackCards.answer,
        "Welcome to your " + blackCards.answer +", bitch!",
        "What were Snuffles first words? " + blackCards.answer,
        "The guy teaches H.S. math. I didn't take him for a " + blackCards.answer + ".",
        "They're just " + blackCards.answer + ", Morty.",
        "It's a new machine. Detects " + blackCards.answer + " all the way up your butt.",
        "Did you get those " + blackCards.answer + " all the way up your butt?",
        "You want to stuff it under a mattress like " + blackCards.answer + ".",
        "You " + blackCards.answer + " Morty. Not very charismatic.",
        "Look at that thing. It defies all logic. What is that thing? " + blackCards.answer,
        "How did Frank Policky die? " + blackCards.answer,
        "What do you think of this flying vehicle Morty? I made it out of " + blackCards.answer + ".",
        "I had to do it Morty. I made a " + blackCards.answer + "."
        ]
    var answers = [
        "Nutrino bomb",
        "Night time takes up half of all time",
        "My little Morties",
        "Holy Crap! Morty, run!",
        "Principal Vagina. No relation",
        "You're like Hitler, but even Hitler cared about Germany or something",
        "Interdimensional Portal Device",
        "Take these seeds and put them waaaaaay up in your butthole",
        "Taut anal cavity",
        "Flim flam",
        "Albert Eindouche",
        "Megaseeds dissolving in your anal cavity",
        "It's a lot like inception, except it'll make sense",
        "Tiny RIIIIIIIIICK!!!",
        "Pickle Riiiiiiiiiiick!!!",
        "Scary Terry, the legally safe knock of of an 80s horror character",
        "Garmanarnar",
        "Schezuan sauce",
        "Caaaaaan do",
        "I'm Mr Meseeks, look at me",
        "An amusement park inside a human body",
        "Pirates of the Pancreas",
        "The Sphincter Dam",
        "People on the internet who are only turned on by cartoons of japanese teenagers",
        "Interdimensional cable",
        "A stuffed teddy bear that poops spider webs",
        "A sex robot",
        "A mexican space armada with weapons made from tomatoes",
    ]

    points1 = 0
    points2 = 0
    $playerOnePoints = $('#player-one-points').text('Blitz and Chitz Tickets: ' + Number(points1))
    $playerTwoPoints = $('#player-two-points').text('Blitz and Chitz Tickets: ' + Number(points2))
    playerOneResponse = ''
    playerTwoResponse = ''
    $('.response1').text('')
    $('.response2').text('')
    responses = []
    $('#player-one-cards').children().remove()
    $('#player-two-cards').children().remove()
    setBlack()
    $('hr').addClass('hidden-cards')
    $('.prompt').fadeIn('fast')
    $('.winner').addClass('hidden-cards')
    $('.winner').text('')

    //create array of responses
    var responses = []
    for (var i = 0; i < 20; i += 1) {
    //select random index
    responses.push(shuffle(answers))
    //remove index from the array
    answers.splice(answers.indexOf(responses[i]), 1)
    }

    //splice responses in half and distribute to both players
    var $playerOneCards = $('#player-one-cards')
    var $playerTwoCards = $('#player-two-cards')

    //first half of responses goes to player one
    var cards1 = responses.splice(0, 10)

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
}


//reset button
var $reset = $('div button:nth-child(6)').on('click', function() {
    initializeGame()
})
    //reset blackCards array and setBlack
    //deal new white cards
    //empty points
    //empty playerResponses
