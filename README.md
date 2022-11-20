# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.


## Final Product

!["Basic Snake action!"](/screenshot1.png)
!["Cool custom messages - Let's go!"](/screenshot2.png)

## Installation Instructions
- Install the server and run it from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

```
git clone https://github.com/lighthouse-labs/snek-multiplayer.git
cd snek-multiplayer
npm install
npm run play
```

- Run the development snake client using the `node play.js` command.

## Files
* [`constants.js`](/constants.js) - contains IP address and port constants for connecting to [Snek](https://github.com/lighthouse-labs/snek-multiplayer).
* [`client.js`](/client.js) - create connection with Snek server
* [`input.js`](/input.js) - input event handler that sends keys pressed by user to the Socket object `conn`
* [`play.js`](/play.js) - runs the game
