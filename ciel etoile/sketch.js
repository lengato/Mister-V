

function setup() {
    createCanvas(500, 800)

}





function draw() {
    background(12, 23, 40);
    stroke(255)
    



fill(255,255,255) 
circle(110,100,120,303)
fill(0,0,0)
 
    
    



    
    let counter = 0;
    while(counter < 1000){

        stroke(255,255,255)
            StarMaker(noise(3, millis()*0.0000001, counter) * width, noise(5, millis()*0.0002, counter) * height, 5, 5);
        counter ++;
          }
    
}


function StarMaker(x, y, w, h)  {
push();
    
translate(x, y);
    
    
if(frameCount%6==0)   {
       line(-w/2, 0, w/2, 0);
       }else{
       line(0, -h/2, 0, h/2);
       }
pop();
 
  
    noStroke();
    rect(300,140,390,500)
    fill(0,0,0)
    
    fill(255,255,244)
      rect(308,145,1,150)
    
    rect(444,400,40,40)
    
 
    
    stroke(255,255,255)
    fill(0,0,0)
    rect(322,177,40,40)
    
        stroke(255,255,255)
    fill(0,0,0)
    rect(372,177,40,40)
    
    
fill(255,255,255)
rect(50,549,229,30)
    
    
    
    
     noStroke(),
          fill(0,0, 0)
    rect(1,550,1000,400)
    
    


       
    
    
    }
