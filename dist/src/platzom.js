'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;

  // si la palabra original es un palindriomo, 
  // ninguna regla anterior cuenta, y se devuelve
  // la misma palabra intercalando mayuscuclas y minusculas

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  //si la palabra termina en ar se le quitan esos dos caracteres
  //toLowerCase = Pasar a minuscula
  //endsWith = termina con
  // slic cortar caracteres, enpiece o termine
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }
  // si la palbra inicia con Z, se la anade "pe" al final
  //toUpperCase() convierte a Mayuscula
  /*
  Comentario de bloque
  */

  if (str.toLowerCase().startsWith('z')) {
    translation += "pe";
  }

  /* Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad\
  y unir con un guion en el medio */

  var length = translation.length;

  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + "-" + secondHalf;
  }

  return translation;
}