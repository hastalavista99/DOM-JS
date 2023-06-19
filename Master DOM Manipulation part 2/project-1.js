//This project involves a web page that generates quotes form famous people
//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');

let person = document.querySelector('.person');


//Below are is an array of quotes to be generated
const quotes = [{
    quote: `"A rose by any other name would smell as sweet."`,
    person: "William Shakespeare"
}, {
    quote: `"All the world’s a stage, and all the men and women merely players."`,
    person: "William Shakespeare"
}, {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice, he is the worst"`,
    person: "Aristotle"
}, {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: "Oprah Winfrey"
}, {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: "Confucius"
}, {
    quote: `"Eighty percent of success is showing up"`,
    person: "Woody Allen"
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck"`,
    person: "Dalai Lama"
}, {
    quote: `"You time is limited, so don't waste it living someone else's life"`,
    person: "Steve Jobs"
}, {
    quote: `"Ask, and it shall be given; seek, and you shall find"`,
    person: "the Bible"
}, {
    quote: `"Life is like riding a bicycle. To keep your balance, you must keep moving."`,
    person: "Albert Einstein"
}];

//Add eventListener to button

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;//call the quote
    person.innerText = quotes[random].person;//call the person
})


