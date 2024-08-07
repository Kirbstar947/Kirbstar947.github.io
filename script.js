// let logoButton = document.querySelectorAll('.logo');
// let logoNum = 1;
// function logoSwitch() {
//     if (logoNum == 1) {
//         logoButton.classList.remove("placeholder-black");
//         logoButton.classList.add("placeholder-darkblue");
//         logoNum = 2;
//     }
//     else if (logoNum == 2) {
//         logoButton.classList.remove("placeholder-darkblue");
//         logoButton.classList.add("placeholder-lightblue");
//         logoNum = 3;
//     }
//     else if (logoNum == 3) {
//         logoButton.classList.remove("placeholder-lightblue");
//         logoButton.classList.add("placeholder-crimson");
//         logoNum = 4;
//     }
//     else if (logoNum == 4) {
//         logoButton.classList.remove("placeholder-crimson");
//         logoButton.classList.add("placeholder-black");
//         logoNum = 1;
//     }
// }
// LogoButton.addEventListener('click', logoSwitch);

let quoteButt = document.querySelector('.quoteButton');
let QuoteNum = 1;
let actualQuote = document.querySelector('.quote');
let actualQuote2 = document.querySelector('.quote-2');
function newQuote() {
    if (QuoteNum == 1) {
        actualQuote.innerHTML = '“There is no difference between a delusion or a';
        actualQuote2.innerHTML = 'dream until it becomes true”';
        QuoteNum = 2;
    }
    else if (QuoteNum == 2) {
        actualQuote.innerHTML = "Hello, second quote here";
        actualQuote2.innerHTML = "";
        QuoteNum = 3;
    }
    else if (QuoteNum == 3) {
        actualQuote.innerHTML = "Alive and well, third quote";
        actualQuote2.innerHTML = "";
        QuoteNum = 4;
    }
    else if (QuoteNum == 4) {
        actualQuote.innerHTML = "Can't expect me to come up with 4";
        actualQuote2.innerHTML = "more, fourth quote";
        QuoteNum = 5;
    }
    else if (QuoteNum == 5) {
        actualQuote.innerHTML = "fifth quote here, ty for coming";
        actualQuote2.innerHTML = "";
        QuoteNum = 1;
    }
}

quoteButt.addEventListener('click', newQuote);