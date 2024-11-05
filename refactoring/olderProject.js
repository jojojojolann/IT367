// Utilitaires pour la génération aléatoire
function getRandomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Données pour la génération des planètes
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

    // Attribue un biome aléatoire à la planète
    assignRandomBiome() {
        return getRandomArrayElement(BIOMES);
    }

    // Génère une population aléatoire pour la planète
    generateRandomPopulation() {
        return getRandomIntegerInRange(1000, 1000000); // Population entre 1,000 et 1,000,000
    }

    // Génère une liste unique de ressources aléatoires
    generateUniqueResources() {
        const numberOfResources = getRandomIntegerInRange(1, 3);
        const selectedResources = new Set();
        
        while (selectedResources.size < numberOfResources) {
            selectedResources.add(getRandomArrayElement(RESOURCES));
        }
        return Array.from(selectedResources);
    }

    // Fournit une description détaillée de la planète
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

    // Crée un ensemble de planètes pour le système solaire
    createPlanets(numberOfPlanets) {
        return Array.from({ length: numberOfPlanets }, () => {
            const planetName = `${getRandomArrayElement(PLANET_NAMES)}-${getRandomIntegerInRange(1, 100)}`;
            return new Planet(planetName);
        });
    }

    // Fournit une description complète du système solaire
    describe() {
        console.log("Système Solaire Généré :");
        this.planets.forEach((planet, index) => {
            console.log(`\nPlanète ${index + 1}:\n${planet.describe()}`);
        });
    }

    // Trouve la planète avec la population la plus élevée
    getMostPopulatedPlanet() {
        return this.planets.reduce((mostPopulated, currentPlanet) => 
            currentPlanet.population > mostPopulated.population ? currentPlanet : mostPopulated
        );
    }
}

// Création et affichage d'un système solaire
const generatedSolarSystem = new SolarSystem(5);
generatedSolarSystem.describe();

console.log("\nPlanète la plus peuplée :");
const mostPopulatedPlanet = generatedSolarSystem.getMostPopulatedPlanet();
console.log(mostPopulatedPlanet.describe());
