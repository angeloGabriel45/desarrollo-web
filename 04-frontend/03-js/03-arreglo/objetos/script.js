/*
 [object Object] {
   color: "Cafe",
   edad: 5,
   ladrar: function(){
      return(`${this.nombre} puede ladrar`)
    },
   macho: true,
   nombre: "Scott",
   tamaño: "Grande"
 }
 */

let perro = {
    nombre:"Scott",
    color:"Cafe",
    edad: 5,
    macho: true,
    ladrar: function(){
      return(`${this.nombre} puede ladrar`)
    },
 
 };
 
 perro.tamaño = "Grande";
 console.log(perro);
 