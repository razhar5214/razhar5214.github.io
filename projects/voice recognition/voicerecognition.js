"use strict";
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
function draw(color ="black",size = 25) {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, size, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.strokeStyle = color;
    context.stroke();
  }
  draw();
  const grammar ='orange;'
  const recognition = new SpeechRecognition();
  const speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  
  const diagnostic = document.querySelector('.output');
  const bg = document.querySelector('html');
  
  document.body.onclick = () => {
    recognition.start();
    console.log('Ready to receive a color command.');
  }
  
  abortBtn.onclick = () => {
    recognition.abort();
    console.log('Speech recognition aborted.');
  }
  
  recognition.onspeechend = () => {
    recognition.stop();
    console.log('Speech recognition has stopped.');
  }