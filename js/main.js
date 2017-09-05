//create arrray of prompt and response cards
var answer = '____'
var blackCards = [
    "Where do I find Dr. Bloom?",
    "You don't agree to have a " + answer + " built inside you if your lifes going great.",
    "No, Jacob is your mother's lover. I watch them. Almost always dressed as " + answer + ".",
    "Gonorrhea can't see us if we don't " + answer + ".",
    "Showtime extreme in a world where man evolved from " + answer + ".",
    "You think you can control me with a " + answer + ".",
    "Bobby Moynihan didn't get along with which SNL cast member?",
    "Welcome to your " + answer +", bitch!",
    "What were Snuffles first words?",
    "The guy teaches H.S. math. I didn't take him for a " + answer + ".",
    "They're just " + answer + ", Morty.",
    "It's a new machine. Detects " + answer + " all the way up your butt.",
    "Did you get those " + answer + " all the way up your butt?",
    "You want to stuff it under a mattress like " + answer + ".",
    "You " + answer + " Morty. Not very charismatic.",
    "Look at that thing. It defies all logic. What is that thing?",
    "How did Frank Policky die?",
    "What do you think of this flying vehicle Morty? I made it out of " + answer + ".",
    "I had to do it Morty. I made a " + answer + "."
]
var answer = [
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
    "Scary Terry, the legally safe knock of ofan 80s horror character.",
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

//shuffle cards with Fisher-Yates shuffle 'https://www.frankmitchell.org/2015/01/fisher-yates/'
function shuffle(array) {
    var i = 0
    var j = 0
    var temp = null

    for (i = array.length - 1; i > 0; i-= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        temp = array[j]
        return temp
    }
}
//get random prompt from blackCards array and input into the DOM
var prompt = shuffle(blackCards)
document.querySelector('.prompt').innerText = prompt

//shuffle white cards and distribute 5 to each player

//