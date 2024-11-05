function getRandomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const PLANET_NAMES = ["Aqua", "Zyron", "Thalor", "Nox", "Verdana", "Kromos", "Luna", "Solaris"];
const BIOMES = ["désert", "forêt tropicale", "océan", "montagne", "toundra", "plaines", "volcanique"];
const RESOURCES = ["minerai", "eau", "carburant", "bois", "plantes médicinales", "cristaux", "énergie solaire"];

class Planet {
    constructor(name) {
        this.name = name || getRandomArrayElement(PLANET_NAMES);
        this.biome = this.assignRandomBiome();
        this.population = this.generateRandomPopulation();
        this.resources = this.generateUniqueResources();
    }

    assignRandomBiome() {
        return getRandomArrayElement(BIOMES);
    }

    generateRandomPopulation() {
        return getRandomIntegerInRange(1000, 1000000);
    }

    generateUniqueResources() {
        const numberOfResources = getRandomIntegerInRange(1, 3);
        const selectedResources = new Set();
        
        while (selectedResources.size < numberOfResources) {
            selectedResources.add(getRandomArrayElement(RESOURCES));
        }
        return Array.from(selectedResources);
    }

    describe() {
        return `Planète ${this.name} : 
        - Biome : ${this.biome}
        - Population : ${this.population.toLocaleString()} habitants
        - Ressources : ${this.resources.join(", ")}`;
    }
}

class SolarSystem {
    constructor(numberOfPlanets) {
        this.planets = this.createPlanets(numberOfPlanets);
    }

    createPlanets(numberOfPlanets) {
        return Array.from({ length: numberOfPlanets }, () => {
            const planetName = `${getRandomArrayElement(PLANET_NAMES)}-${getRandomIntegerInRange(1, 100)}`;
            return new Planet(planetName);
        });
    }

    describe() {
        console.log("Système Solaire Généré :");
        this.planets.forEach((planet, index) => {
            console.log(`\nPlanète ${index + 1}:\n${planet.describe()}`);
        });
    }

    getMostPopulatedPlanet() {
        return this.planets.reduce((mostPopulated, currentPlanet) => 
            currentPlanet.population > mostPopulated.population ? currentPlanet : mostPopulated
        );
    }
}

const generatedSolarSystem = new SolarSystem(5);
generatedSolarSystem.describe();

console.log("\nPlanète la plus peuplée :");
const mostPopulatedPlanet = generatedSolarSystem.getMostPopulatedPlanet();
console.log(mostPopulatedPlanet.describe());
