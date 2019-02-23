//February 23th, 2019
//By
//FERNANDITO YOGA DANNY (Oxygent02)

function randomIndex() {
  let n = floor(random(0, 4));
  return n;
}
function randomOperator() {
  let o = floor(random(0, 1));
  return o;
}
function fx(x1,x2){
  y = (Math.pow((Math.pow(x1,2) + x2 - 11),2) + Math.pow((x1 + Math.pow(x2,2) - 7),2)).toFixed(4);
  return y;
}

class HarmonyMemory {
  constructor(x1,x2,hmcr,par,xup,xlow,b,target,trial) {
    this.label = []; //lable
    this.x1 = x1; //x1
    this.x2 = x2;//x2
    this.aesthethic=[0,0,0,0,0,0];//f(x1,x2)

    this.counter = 0;
    this.counterSame = 0;
    this.target = target;
    this.targetTrial = trial;

    this.finished = false;

    this.hmcr = hmcr;
    this.par  = par;
    this.xup  = xup;
    this.xlow = xlow;
    this.b    = b;

    this.newHmcr1=0;
    this.newHmcr2=0;

    this.newPar1=0;
    this.newPar2=0;
  }

  isFinished(){
    return this.finished;
  }

  doPractice(){
    //how to stop this
    this.counter++;
    if (this.counter == this.target){
      this.finished = true;
    }
    //get the max
    Array.prototype.max = function() {
      return Math.max.apply(null, this);
    };
    //get the min
    // Array.prototype.min = function() {
    //   return Math.min.apply(null, this);
    // };
    if (this.aesthethic.max() == this.aesthethic[5]) {
      this.counterSame++;
      if (this.counterSame >= this.targetTrial) {
        this.finished = true;
      }
    }

    //1. generate new random HMCR comparison
    var z1  = new Instrument();
    this.newHmcr1 = z1.getNewHMCR();
    var z2  = new Instrument();
    this.newHmcr2 = z2.getNewHMCR();

    //2. if random hmcr less than equal original HMCR then use element from current harmony memory
    // else generate new harmony
      //input1
      if(this.newHmcr1 <= this.hmcr){
        var r = randomIndex();
        this.x1[5] = this.x1[r];

        var w1  = new Instrument();
        this.newPar1 = w1.getNewPAR();

        //3. if random par less than equal oginal PAR then do adjustment
        //else no need adjustment
          if (this.newPar1 <= this.par) {
            var oper = randomOperator();
            switch (oper) {
              case 0:
                this.x1[5] = this.x1[5] + b;
                break;
              case 1:
                this.x1[5] = this.x1[5] - b;
                break;
            }

            //if x new out of bound
            if(this.x1[5] <= this.xlow){
              this.x1[5] = this.xlow;
            }
            else if(this.x1[5] >= this.xup){
              this.x1[5] = this.xup;
            }
          }
      }
      else {
        //NOTE: harusnya ada fungsinya
        var newX1  = new Instrument();
        this.x1[5] = newX1.getInstrument();
      }

      //input2
      if(this.newHmcr2 <= this.hmcr){
        var r = randomIndex();
        this.x2[5] = this.x2[r];

        var w2  = new Instrument();
        this.newPar2 = w2.getNewPAR();

        //3. if random par less than equal oginal PAR then do adjustment
        //else no need adjustment
          if (this.newPar2 <= this.par) {
            var oper = randomOperator();
            switch (oper) {
              case 0:
                this.x2[5] = this.x2[5] + b;
                break;
              case 1:
                this.x2[5] = this.x2[5] - b;
                break;
            }

            //if x new out of bound
            if(this.x2[5] <= this.xlow){
              this.x2[5] = this.xlow;
            }
            else if(this.x2[5] >= this.xup){
              this.x2[5] = this.xup;
            }
          }
      }
      else{
        //NOTE: harusnya ada fungsinya
        var newX2  = new Instrument();
        this.x2[5] = newX2.getInstrument();
      }

      //4.swap the maximum aesthethic
      let displayLimit = min(this.aesthethic.length, 6);
      for (let i = 0; i < displayLimit; i++) {
          // this.aesthethic[i] = (this.x2[i] + this.x1[i]);
          this.aesthethic[i] =  fx(this.x1[i],this.x2[i]);
      }

      //get the min
      // Array.prototype.min = function() {
      //   return Math.min.apply(null, this);
      // };
      //get the max
      Array.prototype.max = function() {
        return Math.max.apply(null, this);
      };
      // jadi tinggal pake this.aesthethic.max()
      console.log(this.aesthethic.max());
      var index = 0;
      //get index of the max
      for (let i = 0; i < displayLimit-1; i++) {
        if(this.aesthethic[i] == this.aesthethic.max()){
          index = i;
          console.log(index);
        }
      }
      //swap the max
      if(this.aesthethic.max() > this.aesthethic[5]){
        this.aesthethic[index] = this.aesthethic[5];
        this.x1[index] = this.x1[5];
        this.x2[index] = this.x2[5];
      }

  }

  showMemoryLabel(){
    let label = "";
    let displayLimit = min(this.x1.length, 6);
    let cLabel = 0;

    while(cLabel < displayLimit+1){
      cLabel++;

      if( cLabel == displayLimit){
        this.label[cLabel-1] = "NH";
      }else {
        this.label[cLabel-1] = cLabel;
      }

    }

    for (let i = 0; i < displayLimit; i++) {
      label += "[" + this.label[i] + "]<br>";
    }
    return label;
  }
  showMemoryInput1() {
    let input1 = "";
    let displayLimit = min(this.x1.length, 6);

    for (let i = 0; i < displayLimit; i++) {
      input1 += this.x1[i] + "<br>";
    }
    return input1;
  }
  showMemoryInput2() {
    let input2 = "";
    let displayLimit = min(this.x2.length, 6);

    for (let i = 0; i < displayLimit; i++) {
      input2 += this.x2[i] + "<br>";
    }
    return input2;
  }
  showAesthethic(){
    let hasil = "";

    let displayLimit = min(this.aesthethic.length, 6);

    //print hasil
    for (let i = 0; i < displayLimit; i++) {
      hasil += this.aesthethic[i] + "<br>";
    }

    return hasil;
  }



  getIteration(){
    return this.counter;
  }
  getHMCR(){
    return this.hmcr;
  }
  getPAR(){
    return this.par;
  }
  getXUpper(){
    return this.xup;
  }
  getXLower(){
    return this.xlow;
  }
  getB(){
    return this.b;
  }
  getRandomHMCR1(){
    return this.newHmcr1;
  }
  getRandomPAR1(){
    return this.newPar1;
  }
  getRandomHMCR2(){
    return this.newHmcr2;
  }
  getRandomPAR2(){
    return this.newPar2;
  }

}
