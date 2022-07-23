const card = document.querySelectorAll('.card');
let hasFlippedCard = false;
let fistCard, secondCard;
let lockBoard = false;
let end;

function flipCard() {
    if(lockBoard) return;
    if(this === fistCard) return;
    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        fistCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkMath();
}

function checkMath() {
    if(fistCard.dataset.card === secondCard.dataset.card) {
        disableCard();
        return;
    }
    unflipCard();
}

function disableCard() {
    fistCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCard() {
    lockBoard = true;
    setTimeout(() => {
        fistCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [fistCard, secondCard] = [null, null];
}

(function shuffleCards() {
    card.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    })
})();

card.forEach((card) => {
    card.addEventListener('click', flipCard);
})
