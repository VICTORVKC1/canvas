var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var txtCor=document.getElementById("cor");
var cor="green";
canvas.addEventListener("mousedown",click);
function click(e){
    var novaCor = document.getElementById("cor").value;
     console.log(novaCor); 
     if (novaCor)
    { cor = novaCor; 
    console.log(cor); }
}
var positionX=e.offsetX;
var positionY=e.offsetY;
console.log("X = " + positionX + " | Y = " + positionY);
circulo(positionX,positionY);
function circulo(x,y){
ctx.beginPath();
ctx.strokeStyle=cor;
ctx.lineWidth=2;
ctx.arc (x,y,20,0,2*Math.PI);
ctx.stroke();
}
function limpar () {
     ctx.clearRect(0, 0, canvas.width, canvas.height); }
txtCor.addEventListener("input",function(){
cor=txtCor.value
})