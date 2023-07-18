const lenguajes = ["c#", "java", "phyton"];

const persona = {
  //key : value
  nombre: "kimberly",
  edad: 17,
  gafas: true,
  lenguajes: ["html", "css", "javascript"],

  //metodos
  programar: function () {
    console.log("hola estoy programando en" + lenguajes[2]);
  },
  cumplir: function () {
    this.edad = this.edad + 1;
  },
};
