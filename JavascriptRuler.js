/*function MakeStuffHappen(){
document.getElementById("MakeStuffHappen").style.display='block';

document.write("Hello, World!");
print("Hello World!");
fill(0,0,0);
rect(50,50,50,50);
}\*/

window.alert("Welcome to the party");
   
var canvas=document.querySelector("Canvas");
var c=canvas.getContext("2d");
//ctx.beginPath();
//ctx.rect(150, 150, 50, 50);
//ctx.fillStyle=rgb(0,0,255);
var SquareWidth=3;
var InitialPos=2*SquareWidth;



c.fillRect(InitialPos, InitialPos, SquareWidth, SquareWidth);
c.fillRect(InitialPos/2, InitialPos*1.5, 3*SquareWidth, SquareWidth);
c.fillRect(InitialPos, InitialPos*2, SquareWidth, SquareWidth);

var PlusPerRow=25;
var PlusPerColumn=3*PlusPerRow;
var IOne=1;
var ITwo=1;
var SpaceBetween=15*SquareWidth;

while(ITwo<PlusPerColumn)
{




while(IOne<PlusPerRow)
{
c.fillRect(SpaceBetween*IOne+InitialPos, InitialPos, SquareWidth, SquareWidth);
c.fillRect(SpaceBetween*IOne+InitialPos/2, InitialPos*1.5, 3*SquareWidth, SquareWidth);
c.fillRect(SpaceBetween*IOne+InitialPos, InitialPos*2, SquareWidth, SquareWidth);


    IOne++;

}
ITwo++;

}