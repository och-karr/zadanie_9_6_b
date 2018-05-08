var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(e) { //i ta zmienna e - po co tutaj jest?
  var elementsByTagName = document.getElementsByTagName('li');
  var quantityOfLiElements = elementsByTagName.length;
  
  var element = document.createElement('li');
  element.innerHTML = 'item '+quantityOfLiElements;
  list.appendChild(element);

  console.log(quantityOfLiElements+1); //tak dziala
  console.log('Ilosc elementow to'+quantityOfLiElements+1); //a tak nie! 
  //Magia Javascriptu z ktorej ogarnieciem nadal mam problem
});