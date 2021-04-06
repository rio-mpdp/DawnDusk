
var backgroundImg;

var bg,sr1,sr2,sr3,sr4,sr5,sr6 ;

function preload() {
sr1=loadImage("sunrise1.png")
sr2=loadImage("sunrise2.png")
sr3=loadImage("sunrise3.png")
sr4=loadImage("sunrise4.png")
sr5=loadImage("sunrise5.png")
sr6=loadImage("sunrise6.png")
ss1=loadImage("sunset7.png")
ss2=loadImage("sunset8.png")
ss3=loadImage("sunset9.png")
ss4=loadImage("sunset10.png")
ss5=loadImage("sunset11.png")
ss6=loadImage("sunset12.png")

}
var time;

function setup(){
     createCanvas(1200,700);
       bg=sr1

}

function draw(){
background(bg)
getBackgroundImg()

var s=" AM"
if(time>=12&&time<=23){
s=" PM"
}

fill("blue")   
textSize(20)
text(time+s,50,50)
}

async function getBackgroundImg(){
    var response= await(await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")).json()
     time= response.datetime.slice(11,13)
    if(time>=4&&time<=6){
    bg=sr1
    } else if(time>=6&&time<=8)  {
    bg=sr2
} else if(time>=8&&time<=10){
bg=sr3
} else if(time>=10&&time<=12){
    bg=sr4
} else if(time>=12&&time<=14){
    bg=sr5
}else if(time>=14&&time<=16){
bg=sr6
}else if(time>=16&&time<=18){
    bg=ss1
}
else if(time>=18&&time<=20){
    bg=ss2
}else if(time>=20&&time<=22){
    bg=ss3
}else if(time>=22&&time<=24){
    bg=ss5
}else if(time>=0&&time<=2){
    bg=ss6
}else if(time>=2&&time<=4){
    bg=ss4
}
   
}
