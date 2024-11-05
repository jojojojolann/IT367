function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const subjects = ["Un chat", "Le professeur", "Une banane", "Un robot", "Mon voisin"];
const verbs = ["mange", "saute sur", "pense à", "écrit", "danse avec"];
const objects = ["un livre", "la table", "des idées", "un vaisseau spatial", "un sandwich"];
const adverbs = ["rapidement", "à l'envers", "bizarrement", "comme un ninja", "sans raison"];

function generateRandomSentence() {
    const subject = getRandomElement(subjects);
    const verb = getRandomElement(verbs);
    const object = getRandomElement(objects);
    const adverb = getRandomElement(adverbs);

    return `${subject} ${verb} ${object} ${adverb}.`;
}

function printRandomSentences(count) {
    for (let i = 0; i < count; i++) {
        console.log(generateRandomSentence());
    }
}

printRandomSentences(10);
