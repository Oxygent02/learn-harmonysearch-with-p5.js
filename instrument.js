//February 23th, 2019
//By
//FERNANDITO YOGA DANNY (Oxygent02)

function newHarmony() {
  let c = floor(random(0, 10));
  return c;
}
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

class Instrument {
  constructor() {
    // The genetic sequence
    this.instrument = getRandomFloat(0,10).toFixed(2);
    this.randHMCR   = getRandomFloat(0,1).toFixed(2);
    this.randPAR   = getRandomFloat(0,1).toFixed(2);
  }

  getInstrument(){
    return this.instrument;
  }

  getNewHMCR(){
    return this.randHMCR;
  }

  getNewPAR(){
    return this.randHMCR;
  }
}
