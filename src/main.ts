/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
// deno-lint-ignore prefer-const
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Click Me!</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter.toString();
  // Change the counter color to a random non-white color on each increment
  counterElement.style.color = getRandomNonWhiteColor();

  console.log("I have these thingies:", button, counterElement, counter);
});

// Generate a random color string that is not white or near-white.
function getRandomNonWhiteColor(): string {
  // Avoids very light colors by capping minimum and maximum values.
  // Choose rgb components in range [0, 200] so the color won't be near-white.
  const r = Math.floor(Math.random() * 201); // 0..200
  const g = Math.floor(Math.random() * 201);
  const b = Math.floor(Math.random() * 201);
  // If the generated color happens to be white-ish (e.g. all components > 190), retry once.
  if (r > 190 && g > 190 && b > 190) {
    return getRandomNonWhiteColor();
  }
  return `rgb(${r}, ${g}, ${b})`;
}
