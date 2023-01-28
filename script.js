function number(){
var number=0;
var move= document.querySelector("#center");
move.addEventListener("mousemove",function(element){
number++;
// console.log(number);
if(number===100){
    number=0;
}
else{
    document.querySelector("#center h1").innerHTML=`${number}`;
}
});
}
number();
function color(){
    var move= document.querySelector("#center");
    
    move.addEventListener("mousemove",function(){
        var col=Math.floor(Math.random()*1000);
    document.querySelector("#center").style.backgroundColor="#"+col;

    });

}
color();