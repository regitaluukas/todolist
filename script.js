var tehtud = document.getElementsByClassName("tehtud");
var i;
for (i = 0; i < tehtud.length; i++) {
  tehtud[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
} //Funktsioon tehtud märkimiseks

function lisaUus() {
  var li = document.createElement("li");
  var sisestusVaartus = document.getElementById("sisestus").value;
  var kiri = document.createTextNode(sisestusVaartus);
  if (sisestusVaartus === '') {
    alert("Tühi väli :(");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("sisestus").value = "";

  var span = document.createElement("SPAN");
  var linnuke = document.createTextNode("✓");
  span.className = "tehtud";
  span.appendChild(linnuke);
  li.appendChild(span);
  li.appendChild(kiri);
  for (i = 0; i < tehtud.length; i++) {
    tehtud[i].onclick = function() {
      var div = this.parentElement;

      div.style.display = "none";
    }
  }
}