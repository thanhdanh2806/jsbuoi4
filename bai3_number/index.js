document.getElementById("dem").onclick = function() {
  var a = document.getElementById("so1").value;
  var b = document.getElementById("so2").value;
  var c = document.getElementById("so3").value;
  var d = document.getElementById("done");
  var e = 0;

  a % 2 == 0 && e++;
  b % 2 == 0 && e++;
  c % 2 == 0 && e++;

  d.innerHTML = " Có " + e + " số chẵn " + (3 - e) + " số lẻ ";
}