function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const planetNames = ["Aqua", "Zyron", "Thalor", "Nox", "Verdana", "Kromos", "Luna", "Solaris"];
const biomes = ["désert", "forêt tropicale", "océan", "montagne", "toundra", "plaines", "volcanique"];
const resources = ["minerai", "eau", "carburant", "bois", "plantes médicinales", "cristaux", "énergie solaire"];

class Planet {
    constructor(name) {
        this.name = name || getRandomElement(planetNames);
        this.biome = getRandomElement(biomes);
        this.population = getRandomInt(1000, 1000000);
        this.resources = this.generateResources();
    }

    generateResources() {
        const numResources = getRandomInt(1, 3);
        const availableResources = [];
        for (let i = 0; i < numResources; i++) {
            availableResources.push(getRandomElement(resources));
        }
        return [...new Set(availableResources)];
    }

    describe() {
        return `Planète ${this.name} : 
        - Biome : ${this.biome}
        - Population : ${this.population.toLocaleString()} habitants
        - Ressources : ${this.resources.join(", ")}`;
    }
}

class SolarSystem {
    constructor(numPlanets) {
        this.planets = this.generatePlanets(numPlanets);
    }

    generatePlanets(numPlanets) {
        const planets = [];
        for (let i = 0; i < numPlanets; i++) {
            const planetName = getRandomElement(planetNames) + "-" + getRandomInt(1, 100);
            planets.push(new Planet(planetName));
        }
        return planets;
    }

    describe() {
        console.log("Système Solaire Généré :");
        this.planets.forEach((planet, index) => {
            console.log(`\nPlanète ${index + 1}:\n${planet.describe()}`);
        });
    }

    findRichestPlanet() {
        return this.planets.reduce((richest, planet) => 
            planet.population > richest.population ? planet : richest
        );
    }
}

const mySolarSystem = new SolarSystem(5);
mySolarSystem.describe();

console.log("\nPlanète la plus peuplée :");
const richestPlanet = mySolarSystem.findRichestPlanet();
console.log(richestPlanet.describe());
