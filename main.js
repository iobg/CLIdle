import React, { Component } from "react";
import { render, Color } from "ink";
import ResourceCount from "./components/Counter"
import keypress from "keypress"

process.stdin.setRawMode(true);
process.stdin.resume();
keypress(process.stdin);

const gameState = {
	count: 0
}

process.stdin.on('keypress', function (ch, key) {
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }

  if (key && key.name == 'return') {
   	render(<ResourceCount count={++gameState.count}/>)
  }

});


const init = ()=>{
	render(<ResourceCount count={0}/>)
}

init();