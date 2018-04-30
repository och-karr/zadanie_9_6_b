// function checkOnclickEvent(param) {
//   console.log(param);
// } ---> na poczatku to dodalam, ale dziala bez tego wiec chyba
// niepotrzebne. i nie do konca rozumiem do czego sluzy.

var list = document.getElementById('list');
var add = document.getElementById('addElem');
var num = 0;

add.addEventListener('click', function(e) {
  var element = document.createElement('li');
  num=num+1;
  element.innerHTML = 'item '+num;
  list.appendChild(element);

  var elementsByTagName = document.getElementsByTagName('li');
  var quantityOfLiElements = elementsByTagName.length;
  console.log(quantityOfLiElements);
});