/* FINAL PROJECT
 * Tiffany
 *30 April 2020
 */
let notes = [60, 62, 64, 65, 67, 69, 71, 72];
//let blackkeys = [61, 63, 66, 68, 70];
let index = 0;
let trigger = 0;
let osc;

function setup() {
  createCanvas(500, 400);

  // Triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
}

// A function to play a note
function playNote(note, duration) {
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

  //white keys outline
  stroke(0);
  line(width / 8, 0, width / 8, height);
  line(2 * width / 8, 0, 2 * width / 8, height);
  line(3 * width / 8, 0, 3 * width / 8, height);
  line(4 * width / 8, 0, 4 * width / 8, height);
  line(5 * width / 8, 0, 5 * width / 8, height);
  line(6 * width / 8, 0, 6 * width / 8, height);
  line(7 * width / 8, 0, 7 * width / 8, height);
  line(8 * width / 8, 0, 8 * width / 8, height);

  // Depending on mouse location, a different rectangle is set to a color
  //C note- white rect 1
  if (mouseX < width / 8 && mouseX > 0) {
    fill(255, 179, 217); // pink
    rect(0, 0, width / 8, height);

    //D note- white rect 2
  } else if (mouseX < 2 * width / 8) {
    fill(255, 203, 151); // light orange
    rect(width / 8, 0, width / 8, height);

    //E note- white rect 3
  } else if (mouseX < 3 * width / 8) {
    fill(255, 255, 164); // light yellow
    rect(2 * width / 8, 0, width / 8, height);

    //F note- white rect 4
  } else if (mouseX < 4 * width / 8) {
    fill(162, 255, 162); // light green
    rect(3 * width / 8, 0, width / 8, height);

    //G note- white rect 5
  } else if (mouseX < 5 * width / 8) {
    fill(158, 241, 231); // light aqua
    rect(4 * width / 8, 0, width / 8, height);

    //A note- white rect 6
  } else if (mouseX < 6 * width / 8) {
    fill(145, 200, 255); // light blue
    rect(5 * width / 8, 0, width / 8, height);

    //B note- white rect 7
  } else if (mouseX < 7 * width / 8) {
    fill(177, 180, 254); // light indigo
    rect(6 * width / 8, 0, width / 8, height);

    //C note- white rect 8
  } else if (mouseX < 8 * width / 8) {
    fill(210, 177, 254); // light purple
    rect(7 * width / 8, 0, width / 8, height);
  }


  //C# note - black rect 1
  fill(0);
  rect(3 / 4 * width / 8, 0, width / 16, height / 2)

  if (mouseX >= 3 / 32 * width && mouseX <= 5 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) {
      //play music
      fill(255);
      rect(3 / 4 * width / 8, 0, width / 16, height / 2);
    } else {
      fill(0);
    }
  }

  //D# note - black rect 2
  fill(0);
  rect(7 / 4 * width / 8, 0, width / 16, height / 2);
  if (mouseX >= 7 / 32 * width && mouseX <= 9 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) {
      fill(255);
      rect(7 / 4 * width / 8, 0, width / 16, height / 2);
    } else {
      fill(0);
    }
  }

  //F# note - black rect 4
  fill(0);
  rect(15 / 4 * width / 8, 0, width / 16, height / 2)

  if (mouseX >= 15 / 32 * width && mouseX <= 17 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) {
      //play music
      fill(255);
      rect(15 / 4 * width / 8, 0, width / 16, height / 2);
    } else {
      fill(0);
    }
  }

  //G# note - black rect 5
  fill(0);
  rect(19 / 4 * width / 8, 0, width / 16, height / 2);
  if (mouseX >= 19 / 32 * width && mouseX <= 21 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) {
      //play music
      fill(255);
      rect(19 / 4 * width / 8, 0, width / 16, height / 2);
    } else {
      fill(0);
    }
  }

  //A# note- black rect 6
  fill(0);
  rect(23 / 4 * width / 8, 0, width / 16, height / 2);
  if (mouseX >= 23 / 32 * width && mouseX <= 25 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) {
      //play music
      fill(255);
      rect(23 / 4 * width / 8, 0, width / 16, height / 2);
    } else {
      fill(0);
    }
  }

  // C# - black rect 7
  fill(0);
  rect(31 / 4 * width / 8, 0, width / 32, height / 2);
  if (mouseX >= 31 / 32 * width && mouseX <= 33 / 32 * width && mouseY < height / 2) {
    if (mouseIsPressed) {
      fill(255);
      rect(31 / 4 * width / 8, 0, width / 32, height / 2);
    } else {
      fill(0);
    }

  }
}

function mousePressed(event) {
  if (event.button == 0 && event.clientX < width && event.clientY < height) {
    // Map mouse to the key index
    let key = floor(map(mouseX, 0, width, 0, notes.length));
    playNote(notes[key]);
  }
}

// Music fades it out when we release
function mouseReleased() {
  osc.fade(0, 0.5);
}
