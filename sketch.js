let harmonyMemory;

let judul;
let stats;
let randStats;

let TXT;
let TXTX1;
let TXTX2;
let TXTAESTHETHIC;

function setup() {
  //init skecth judul
  judul = createP("HARMONY SEARCH");
  judul.position(350,-70);
  judul.class("title");

  stats = createP("Stats");
  stats.class("stats");;

  randStats = createP("randStats");
  randStats.position(200,350);
  randStats.class("stats");;

  //init skecth lable input
  TXT = createP("Label");
  TXT.position(470, 100);
  TXT.class("lable");

  //init skecth x1
  TXTX1 = createP("X1");
  TXTX1.position(600, 100);
  TXTX1.class("all");

  //init skecth x2
  TXTX2 = createP("X2");
  TXTX2.position(700, 100);
  TXTX2.class("all");

  //init skecth aesthethic
  TXTAESTHETHIC = createP("AESTHETHIC");
  TXTAESTHETHIC.position(800, 100);
  TXTAESTHETHIC.class("all");

  x1            = [-2.5, -0.75, 1.25, 4, 3];  //input1
  x2            = [2.1, 3.8, -4.2, 1.5, 0.7]; //input2
  //fungsi ada di fx(x1,x2) pada HarmonyMemory.js
  targetIterasi = 1000000;                       //berapa kali perulangan
  targetTrial   = 1000;                        //bound of same aesthethic
  hmcr          = 0.9;
  par           = 0.3;
  xup           = 6;
  xlow          = -6;
  b             = (xup-xlow)/1000;
  harmonyMemory = new HarmonyMemory(x1,x2,hmcr,par,xup,xlow,b,targetIterasi,targetTrial);
}

function draw() {
  harmonyMemory.doPractice();

  if (harmonyMemory.isFinished()) {
    noLoop();
  }

  displayInfo();
}

function displayInfo() {
  judul.html("HARMONY SEARCH");

  let statstext = "Target Max Iterasi:     " + targetIterasi + " kali<br>";
  statstext += "Iterasi ke-:       " + nf(harmonyMemory.getIteration()) + "<br>";
  statstext += "<br>";
  statstext += "HMCR:       " + nf(harmonyMemory.getHMCR()) + "<br>";
  statstext += "PAR:       " + nf(harmonyMemory.getPAR()) + "<br>";
  statstext += "Xupper:       " + nf(harmonyMemory.getXUpper()) + "<br>";
  statstext += "Xlower:       " + nf(harmonyMemory.getXLower()) + "<br>";
  statstext += "b :       " + nf(harmonyMemory.getB()) + "<br>";
  stats.html(statstext);

  let statsRandom = "Random HMCR[X1]:     " + nf(harmonyMemory.getRandomHMCR1()) + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
  statsRandom += "Random PAR[X1]:     " + nf(harmonyMemory.getRandomPAR1()) + "<br>";
  statsRandom += "Random HMCR[X2]:     " + nf(harmonyMemory.getRandomHMCR2()) + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
  statsRandom += "Random PAR[X2]:     " + nf(harmonyMemory.getRandomPAR2()) + "<br>";
  randStats.html(statsRandom);

  TXT.html("Input:<br>" + harmonyMemory.showMemoryLabel());
  TXTX1.html("X1<br>" + harmonyMemory.showMemoryInput1());
  TXTX2.html("X2<br>" + harmonyMemory.showMemoryInput2());
  TXTAESTHETHIC.html("Aesthethic<br>" + harmonyMemory.showAesthethic());
}
