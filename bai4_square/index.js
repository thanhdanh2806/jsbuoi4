document.getElementById("dudoan").onclick = function () {
  var e = document.getElementById("so1").value,
    t = document.getElementById("so2").value,
    n = document.getElementById("so3").value,
    a = document.getElementById("square"),
    c = Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2)),
    u = Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2)),
    m = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
  a.innerHTML =
    e == t && t == n
      ? "Hình tam giác đều"
      : e == t || t == n || e == n
      ? "Hình tam giác cân"
      : e == c || t == u || n == m
      ? "Hình tam giác vuông"
      : "Một loại tam giác nào đó";
};
