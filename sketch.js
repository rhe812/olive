let nav;
let adbar;
let product;
let GNB;
let ai;
let green1;
let textbox;
let state = 0;


function preload(){
  nav = loadImage('01_NavBar.png');
  adbar = loadImage('02_AdBanner.png');
  product = loadImage('03_Product.png');
  GNB = loadImage('04_GNB.png');
  ai = loadImage('05_ai_icon.png');
}

function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(255);
  image(nav,0,0,393,128);
  image(adbar,0,128,393,284);
  image(product,0,412,393,440);
  image(GNB,0,764,393,88);
  image(ai,320,688,60,60);
  
}

function mouseClicked(){
  if(mouseX >= 320 && mouseX =<380);{
    if(mouseY >= 688 && mouseY =<748);{
      if(state == 0){
        state = 1;
      }else if(state == 1){
        state = 0
      }
    }
  }
}