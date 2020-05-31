import React, { Component } from "react";
import { render, Color } from "ink";
import ResourceCount from "./components/Counter"
import keypress from "keypress"

process.stdin.setRawMode(true);
process.stdin.resume();
keypress(process.stdin);

const gameState = {
	count: 0,
	enterHeld: false,
	enterPower: 1,
	passiveInc: 0.1
}

process.stdin.on('keypress', function (ch, key) {
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
    process.exit();
  }

  if (key && key.name == 'return') {
   	handlePress()
  }

});

const handlePress = () => {
	//node can only check for keypress so... keep it from incrementing super fast when held
	//flag gets cleared in main loop... maybe upgrades make it faster?
	if(!gameState.enterHeld)
		gameState.count += gameState.enterPower;
	render(<ResourceCount count={gameState.count.toFixed(2)}/>)
	gameState.enterHeld = true;
}

const update = () => {
	gameState.enterHeld = false;
	gameState.count += gameState.passiveInc;
	render(<ResourceCount count={gameState.count.toFixed(2)}/>)
}

const init = ()=>{
	console.clear()
	render(<ResourceCount count={0}/>)
}

const mainLoop = setInterval(()=>{
	update()
}, 100)

init();