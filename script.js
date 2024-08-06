// let LogoButton = document.querySelector('logo');
// let LogoNum = 1;
// function LogoSwitch() {
//     if (LogoNum == 1) {
//         LogoButton.classList.remove("placeholder-black");
//         LogoButton.classList.add("placeholder-darkblue");
//         LogoNum = 2;
//     }
//     else if (LogoNum == 2) {
//         LogoButton.classList.remove("placeholder-darkblue");
//         LogoButton.classList.add("placeholder-lightblue");
//         LogoNum = 3;
//     }
//     else if (LogoNum == 3) {
//         LogoButton.classList.remove("placeholder-lightblue");
//         LogoButton.classList.add("placeholder-crimson");
//         LogoNum = 4;
//     }
//     else if (LogoNum == 4) {
//         LogoButton.classList.remove("placeholder-crimson");
//         LogoButton.classList.add("placeholder-black");
//         LogoNum = 1;
//     }
// }
// LogoButton.addEventListener('click', LogoSwitch);

let QuoteButt = document.querySelector('quoteButton');
function NewQuote() {
    document.body.style.backgroundColor = `rgb(255, 0, 0)`;
}

QuoteButt.addEventListener('click', NewQuote);