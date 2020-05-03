/* FINAL PROJECT : Pianooooo
 * by Tiffany Kwan <kwant@emmanuel.edu>
 * May 3, 2020
 */
let notes = [59, 61, 63, 65, 67, 69, 70, 71];
let blackkeys = [60, 62, 64, 68, 70];
let index = 0;
let trigger = 0;
let osc;

function setup() {
  createCanvas(500, 400);

  // oscillator- triangle
  osc = new p5.TriOsc();
  // Silent
  osc.start();
  osc.amp(0);
}

// A function to play a note
function playNotes(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5, 0.2);

  // If we set a duration, fade it out
  if (1) {
    setTimeout(function() {
      osc.fade(0, 0.2);
    }, duration - 50);
  }
}

function draw() {
  background(255);

  // outline for white keys
  stroke(0);
  line(1 * width / 8, 0, 1 * width / 8, height);
  line(2 * width / 8, 0, 2 * width / 8, height);
  line(3 * width / 8, 0, 3 * width / 8, height);
  line(4 * width / 8, 0, 4 * width / 8, height);
  line(5 * width / 8, 0, 5 * width / 8, height);
  line(6 * width / 8, 0, 6 * width / 8, height);
  line(7 * width / 8, 0, 7 * width / 8, height);
  line(8 * width / 8, 0, 8 * width / 8, height);

// Colors will depend on location of the mouse

  //C note- white key 1
  if (mouseX < width / 8 && mouseX > 0) {
    fill(255, 179, 217); // pink
    rect(0, 0, width / 8, height);

    //D note- white key 2
  } else if (mouseX < 2 * width / 8) {
    fill(255, 203, 151); // light orange
    rect(1 * width / 8, 0, width / 8, height);

    //E note- white key 3
  } else if (mouseX < 3 * width / 8) {
    fill(255, 255, 164); // light yellow
    rect(2 * width / 8, 0, width / 8, height);

    //F note- white key 4
  } else if (mouseX < 4 * width / 8) {
    fill(162, 255, 162); // light green
    rect(3 * width / 8, 0, width / 8, height);

    //G note- white key 5
  } else if (mouseX < 5 * width / 8) {
    fill(158, 241, 231); // light aqua
    rect(4 * width / 8, 0, width / 8, height);

    //A note- white key 6
  } else if (mouseX < 6 * width / 8) {
    fill(145, 200, 255); // light blue
    rect(5 * width / 8, 0, width / 8, height);

    //B note- white key 7
  } else if (mouseX < 7 * width / 8) {
    fill(177, 180, 254); // light indigo
    rect(6 * width / 8, 0, width / 8, height);

    //C note- white key 8
  } else if (mouseX < 8 * width / 8) {
    fill(210, 177, 254); // light purple
    rect(7 * width / 8, 0, width / 8, height);
  }


  //C# note - black key 1
  fill(0);
  rect(3 / 4 * width / 8, 0, width / 16, height / 2)

  if (mouseX >= 3 / 32 * width && mouseX <= 5 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) { // play music
      fill(189, 0, 0); // dark red
      rect(3 / 4 * width / 8, 0, width / 16, height / 2);
    } else {
      fill(0); // no music
    }
  }

  //D# note - black key 2
  fill(0);
  rect(7 / 4 * width / 8, 0, width / 16, height / 2);
  if (mouseX >= 7 / 32 * width && mouseX <= 9 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) { // music plays
      fill(185, 133, 62); //dark orange
      rect(7 / 4 * width / 8, 0, width / 16, height / 2);
    } else {
      fill(0); // silent
    }
  }

  //F# note - black key 3
  fill(0);
  rect(15 / 4 * width / 8, 0, width / 16, height / 2)

  if (mouseX >= 15 / 32 * width && mouseX <= 17 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) {  // play music
      fill(216, 203, 48); // dark yellow
      rect(15 / 4 * width / 8, 0, width / 16, height / 2);
    } else {
      fill(0); // silent
    }
  }

  //G# note - black key 4
  fill(0);
  rect(19 / 4 * width / 8, 0, width / 16, height / 2);
  if (mouseX >= 19 / 32 * width && mouseX <= 21 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) { //play music
      fill(61, 159, 32); // dark green
      rect(19 / 4 * width / 8, 0, width / 16, height / 2);
    } else {
      fill(0); // silent
    }
  }

  //A# note- black key 5
  fill(0);
  rect(23 / 4 * width / 8, 0, width / 16, height / 2);
  if (mouseX >= 23 / 32 * width && mouseX <= 25 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) { //play music
      fill(17, 103, 174); // dark blue
      rect(23 / 4 * width / 8, 0, width / 16, height / 2);
    } else {
      fill(0); // play no music
    }
  }

  // C# - black key 6
  fill(0);
  rect(31 / 4 * width / 8, 0, width / 32, height / 2);
  if (mouseX >= 31 / 32 * width && mouseX <= 33 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) { // play
      fill(164, 0, 164); // dark purple
      rect(31 / 4 * width / 8, 0, width / 32, height / 2);
    } else {
      fill(0); // silent
    }

  }
}

function mousePressed(pplayed) {
  if (pplayed.button == 0 && pplayed.clientX < width && pplayed.clientY < height) {
    // Map mouse to the key index
    let key = floor(map(mouseX, 0, width, 0, notes.length));
    playNotes(notes[key]);
  }
}

// Music fades it out when we release
function mouseReleased() {
  osc.fade(0, 0.5);
}
