/* 
Zedrick Ara 
11/23/2016
Javascript Test Review
*/

var knight = "Arthur";
var maiden = "Guinevere";
var monster = "Dragon";

var weaponChest = ("Mace", "Sorcerer's Stone", "Excalibur");
var wizard = "Merlin";
var weapon = weaponChest[2];
var power = 50;

function swordInTheStone (worthy){
  if ("Arthur" == worthy){
    console.log ("We have found our King " + worthy);
}else {
    console.log ("We must keep searching, for " + worthy + " is unworthy");
}
swordInTheStone (knight);

function trueLove (king, queen){
  if (queen == "Guinevere" && king == "Arthur"){
    console.log ("On this day, our " + king + " and " + queen + " shall rule happily ever after");
}else{
    console.log ("We must keep searching, for true love must reign over Camelot.");  
}

trueLove (knight, maiden);

function epicBattle (wizard,enemy,power){
  if (power <= 15){
    console.log ("Our " + wizard + " has fallen");
} else if (power >= 16 && power <= 40){
    console.log (wizard + " has almost slain " + enemy);
} else{
    console.log (wizard + " has slain the " + enemy + "!");
}
epicBattle (wizard, monster, power);