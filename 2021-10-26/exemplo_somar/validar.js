  function somarvalores(v1,v2)
  {
  var v1 = document.getElementById("v1").value;
  var v2 = document.getElementById("v2").value;
  var total = parseInt(v1) + parseInt(v2);
  document.getElementById("res").innerHTML = " Resultado : " + total;
}


