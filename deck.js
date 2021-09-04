const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const SUIT_MAX = 13;

export function buildDeck() {
    const deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < SUIT_MAX; x++) {
            deck.push({
                value: x+1,
                suit: suits[i]
            })
        }
    }

    return deck;
}

export function shuffleDeck(deck) {
    const shuffledDeck = [];
    // get random index from deck, remove from array
    // add to new shuffled deck.
    for (let i = deck.length--; i > 0; i--) {
        const index = Math.floor(Math.random() * deck.length);
        const card = deck.splice(index, 1);
        shuffledDeck.push(card);
    }

    return shuffledDeck;
}
