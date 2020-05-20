
var canvas=document.querySelector("Canvas");
var c=canvas.getContext("2d");



var SquareWidth=3;
var InitialPos=2*SquareWidth;





c.fillRect(InitialPos, InitialPos, SquareWidth, SquareWidth);
c.fillRect(InitialPos/2, InitialPos*1.5, 3*SquareWidth, SquareWidth);
c.fillRect(InitialPos, InitialPos*2, SquareWidth, SquareWidth);

var PlusPerRow=25;
var PlusPerColumn=3*PlusPerRow;
var IOne=0;
var ITwo=0;
var SpaceBetween=15*SquareWidth;

var Red=Math.floor(Math.random()*255);
var Green=Math.floor(Math.random()*255);
var Blue=Math.floor(Math.random()*255);


while(ITwo<PlusPerColumn)
{
IOne=0;



while(IOne<PlusPerRow)
{
var Red=Math.floor(Math.random()*255);
var Green=Math.floor(Math.random()*255);
var Blue=Math.floor(Math.random()*255);


c.fillStyle="rgb(" + Red +"," + Green + "," + Blue + ")";
c.fillRect(SpaceBetween*IOne+InitialPos, SpaceBetween*ITwo+InitialPos, SquareWidth, SquareWidth);
c.fillRect(SpaceBetween*IOne+InitialPos/2, SpaceBetween*ITwo+InitialPos*1.5, 3*SquareWidth, SquareWidth);
c.fillRect(SpaceBetween*IOne+InitialPos, SpaceBetween*ITwo+InitialPos*2, SquareWidth, SquareWidth);


    IOne++;

}
ITwo++;

}