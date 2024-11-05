function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const a = getRandomElement(["foo", "bar"]);
const b = getRandomElement([1, 2]);
const c = getRandomElement([{ path: "/foo" }, { path: "/bar" }]);

console.log(a, b, c);