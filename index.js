let Heroi= "Ryuma"
let Exp= 3100
// Niveis de xp: 0-2000 iniciante,2001-3000 aprendiz,3001-4000 soldado, 4001- 5000 mercenario, 5001-7000 samurai,
//7001-9000 shogun,9000+ lenda

let nivel1= "iniciante"
let nivel2= "aprendiz"
let nivel3= "mercenario"
let nivel4= "samurai"
let nivel5= "shogun"
let nivel6= "lenda"

if (Exp<= 2000){
    console.log("O heroi " + Heroi + " está no estagio " + nivel1 )
}
else if (Exp<= 4000 ){
    console.log("O heroi " + Heroi + " está no estagio " + nivel2 )
}
else if (Exp<= 5000) {
    console.log("O heroi " + Heroi  + " está no estagio " + nivel3)
}
else if (Exp <= 7000) {
  console.log ("O heroi " + Heroi  + " está no estagio " + nivel4)  
}
else if (Exp <= 9000){
    console.log("O heroi " + Heroi  + " está no estagio " + nivel5)
}
else if (Exp>9000 ) {
    console.log ("O heroi " + Heroi  + " está no estagio " + nivel6)
}