/* 
Zedrick Ara 
11/23/2016
Javascript Test Review
*/

// Variables

var knight = "Arthur";
var maiden = "Guinevere";
var monster = "Dragon";

// Array

var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];

// object

var hero = {
  wizard : "Merlin",
  weapon : weaponChest[2],
  power : 50
}

// Sword in the Stone 

function swordInTheStone (worthy){
  if ("Arthur" == worthy){
    console.log ("We have found our King " + worthy);
}else {
    console.log ("We must keep searching, for " + worthy + " is unworthy");
}
swordInTheStone (knight);

// True Love

function trueLove (king, queen){
  if (queen == "Guinevere" && king == "Arthur"){
    console.log ("On this day, our " + king + " and " + queen + " shall rule happily ever after");
}else{
    console.log ("We must keep searching, for true love must reign over Camelot.");  
}
trueLove (knight, maiden);

// Epic Battle

function epicBattle (wizard, enemy, power){
  if (power <= 15){
    console.log ("Our " + wizard + " has fallen");
} else if (power >= 16 && power <= 40){
    console.log (wizard + " has almost slain " + enemy);
} else{
    console.log (wizard + " has slain the " + enemy + "!");
}
epicBattle (hero.wizard, monster, hero.power);

// Merlin's War

function merlinsWar(weapon) {
  if (weapon == weaponChest[1]) {
    console.log (hero.wizard + " shall slay the " + monster + " with the " + weapon);
  }
  else {
    weapon = weaponChest[1];
    console.log(hero.wizard + " is ready for war with the " + weapon);
  }
}
merlinsWar(hero.weapon);