import React, { Component } from "react";
import { render, Color } from "ink";
import ResourceCount from "./components/GameUI"
import dictionary from "./words_dictionary"
import keypress from "keypress"

process.stdin.setRawMode(true);
process.stdin.resume();
keypress(process.stdin);

const gameState = {
	count: 0,
	currentWord: "password",
	typingState : ""

}

process.stdin.on('keypress', function (ch, key) {
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
    process.exit();
  }
  else if (key && key.name) {
  	if(key.shift){
  		key.name  = key.name.toUpperCase();
  	}
  	handlePress(key.name)
  }



});

const handlePress = (keyPressed) => {
	//node can only check for keypress so... keep it from incrementing super fast when held
	//flag gets cleared in main loop... maybe upgrades make it faster?
	switch(keyPressed) {
	  	case 'return':
	  		gameState.typingState = ''
	  		break;
	  	case 'backspace':
	  		gameState.typingState = gameState.typingState.substring(0, gameState.typingState.length-1)
	  		break;
	  	default:
	  		if(keyPressed && keyPressed.length === 1){
	  			gameState.typingState += keyPressed
	  		}
	  	break;
	 }
	update()
}

const update = () => {
	render(<ResourceCount 
		currentWord={gameState.currentWord}
		typingState = {gameState.typingState.padEnd(25, ' ')}
	/>)
}

const init = ()=>{
	console.clear()
	render(<ResourceCount 
		currentWord={gameState.currentWord}
		typingState = {gameState.typingState.padEnd(25, ' ')}
	/>)
}


init();