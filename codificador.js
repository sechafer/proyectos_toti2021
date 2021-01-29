function Enviar() {
//var code = 'samuel eli chacon fernandez';
var code = document.getElementById("nomeid");
var string1 = code.split(' ');

console.log(string1);
var string2 = '';
  for (var i = 0; i <= string1.length-1; i++) {
   var word= string1[i];
   console.log(word);
   word=  word.replaceAll('e','enter');       
   word=  word.replaceAll('i','imes');
   word=  word.replaceAll('a','ai');
   word=  word.replaceAll('u','ufat');
   word=  word.replaceAll('o','ober');
   string2 = string2 + ' ' + word;
  }
  // console.log(string2);
  if (string2.value != "") {
    alert('Su frase codificada es  ' + string2.value + ' ');
}
}