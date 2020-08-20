// script qui permet de griser un input 

var selectElem = document.getElementById('select');
var btnappuyer = document.getElementById('buttonh');


// Quand une nouvelle <option> est selectionnée
selectElem.addEventListener('change', function() {
  // si cette option est égale à la value="1" (la case est grisée et non utilisable)
  if (this.value == "1") {
      // alors on ajoute l'attribut disabled
      btnappuyer.setAttribute("disabled", "");
  }
  // sinon on enlève l'attribut disabled (la case est utilisable par l'utilisateur)
  else{
    btnappuyer.removeAttribute('disabled');
  }
});