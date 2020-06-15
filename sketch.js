
function setup() {
  createCanvas(1100, 900);
  background(0,0,0);
  frameRate(15);
  angSlider = createSlider(1, 90, 70);
  angSlider.position(20, 20);
  angSlider.style('width', '100px');

  maxSlider = createSlider(5, 50, 40);
  maxSlider.style('width', '240px');
  maxSlider.position(160, 20);

  sizeSlider = createSlider(20, 400, 200);
  sizeSlider.style('width', '220px');
  sizeSlider.position(450, 20);

  percSlider = createSlider(5, 80, 70);
  percSlider.style('width', '220px');
  percSlider.position(750, 20);




}
function draw(){
    background(0,0,0);
    defined_angle = angSlider.value()
    defined_max = 58 - maxSlider.value()
    defined_size = sizeSlider.value();
    defined_iter = percSlider.value()/100
    branches(550, 900, 550, floor(900-defined_size), (3/2)*Math.PI);

    text('# of Branches', maxSlider.x, 85);
    textSize(40);
    fill('white');

    text('Angle', angSlider.x, 85);
    textSize(40);
    fill('white');

    text('Iterative Size', percSlider.x, 85);
    textSize(40);
    fill('white');

     text('Branch Size', sizeSlider.x, 85);
     textSize(40);
     fill('white');


    /* CODE FOR ANGLE CHECKER I USED TO DETERMINE SOME ASPECTS

    stroke(250,250,250);
    line(450, 200, 450, 400);
    line(350, 300, 550, 300);
    middlex=450;
    middley=300;
    angleCheck(-60);*/



}

function angleCheck(deg){
    c_angle = deg*Math.PI/180;
    c_dx = Math.cos(c_angle)*100;
    c_dy = Math.sin(c_angle)*100;
    //c_angle2 = (3/2)*Math.PI - (c_angle - (3/2)*Math.PI);
    //c_dx2 = Math.cos(c_angle2)*100;
    //c_dy2 = Math.sin(c_angle2)*100;
    line(middlex, middley, middlex+c_dx, middley+c_dy);
    //line(middlex, middley, middlex+c_dx2, middley+c_dy2);
    stroke(0,250,250);
    c_angle3 = deg*Math.PI/180 + (c_angle - (3/2)*Math.PI);
    c_dx3 = Math.cos(c_angle3)*100;
    c_dy3 = Math.sin(c_angle3)*100;
    line(middlex+c_dx, middley+c_dy, middlex+c_dx+c_dx3, middley+c_dy+c_dy3);

    stroke(250,0,250);
    c_angle4 = deg*Math.PI/180 + (c_angle - (3/2)*Math.PI);
    c_angle4 = c_angle - (c_angle3 - (c_angle));
    c_dx4 = Math.cos(c_angle4)*100;
    c_dy4 = Math.sin(c_angle4)*100;
    line(middlex+c_dx, middley+c_dy, middlex+c_dx+c_dx4, middley+c_dy+c_dy4);



}


let defined_angle = 1;
let defined_max = 5;
let defined_size = 200;
let defined_iter = .7
function branches(startx, starty, finishx, finishy, prev_angle){
    let curr_length = Math.sqrt((startx-finishx)**2 + (starty-finishy)**2);
    stroke(250,250,250);
    line(startx, starty, finishx, finishy);
    new_len = defined_iter * curr_length;
    let angle = (-1*defined_angle)*Math.PI/180 + (prev_angle - (3/2)*Math.PI); //Note that the int here is degrees
    let deltx = Math.cos(angle)*new_len;
    let delty = Math.sin(angle)*new_len;
    let prev_angle2 = (3/2)*Math.PI - (prev_angle - (3/2)*Math.PI)

    let angle2 = prev_angle - (angle - (prev_angle));
    let deltx2 = Math.cos(angle2)*new_len;
    let delty2 = Math.sin(angle2)*new_len;


    let check_len = Math.sqrt((finishx-floor(finishx+deltx))**2 + (finishy-floor(finishy+delty))**2);
    if (check_len > defined_max){
    branches(finishx, finishy, floor(finishx+deltx), floor(finishy+delty), angle);
    branches(finishx, finishy, floor(finishx+deltx2), floor(finishy+delty2), angle2);
    }


}
