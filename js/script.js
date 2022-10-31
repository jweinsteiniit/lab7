function init(){
//add your javascrip between these two lines of code
  var divButton = document.getElementById('entrybutton');
  divButton.addEventListener('click',nameAlert);
}
window.addEventListener('load', init);
function nameAlert(){
  var text = document.getElementById('entryinput').value;
  var h2result = document.getElementById('textoutput');
  h2result.textContent = text;
  alert("Jake Weinstein: "+text);
}
