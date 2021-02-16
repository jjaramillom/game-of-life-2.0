# Conway's Game of life

Invented by the british mathematician John Horton Conway, this "game" models a cellular automation based on a set of rules.

- If a cell is alive and has less than two live neighbors, it dies as of underpopulation.
- If a cell is alive and has more than three live neighbors, it dies as of overpopulation.
- If a cell is alive and has two or three live neighbors, it lives on to the next generation.
- If a cell is dead and has exactly three live neighbors, it comes back to life, as of reproduction.

In this simple app, it's possible to run different simulations and visualize the process.

### To run:

1. `npm install`
2. `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### See it running [here](https://jjaramillom.github.io/game-of-life-2.0/)

**The Project uses Context API to manage the state, and does not depend on any UI library.**
