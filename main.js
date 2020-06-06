import React, { Component } from "react";
import { render, Color } from "ink";
import ResourceCount from "./components/GameUI"
import dictionary from "./words_dictionary"
import keypress from "keypress"
import {writeFileSync} from "fs"

import gameState from "./saveGame"

const dictIndexes = Object.keys(dictionary)

process.stdin.setRawMode(true);
process.stdin.resume();
keypress(process.stdin);


process.stdin.on('keypress', function (ch, key) {
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
    writeFileSync("saveGame.json", JSON.stringify(gameState))
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
	  		checkMatch()
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
		count = {gameState.count}
		currentWord={gameState.currentWord}
		typingState = {gameState.typingState.padEnd(50, ' ')}
	/>)
}

const checkMatch = () => {
	if(gameState.currentWord === gameState.typingState){
		gameState.count++
		gameState.typingState = ""
		getRandomWord()
	}
}

const getRandomWord = () => {
	let randomIndex = Math.floor(Math.random() * dictIndexes.length)
	gameState.currentWord = dictIndexes[randomIndex]
	
}

const init = ()=>{
	console.clear()
	getRandomWord()
	update()
}


init();