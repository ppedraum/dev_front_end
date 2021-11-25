startList = function() 
{
    if (document.all&&document.getElementById) 
  {
    navRoot = document.getElementById("menuDropDown");
    for (i=0; i<navRoot.childNodes.length; i++) 
    {
    node = navRoot.childNodes[i];
    if (node.nodeName=="LI") 
    {
    node.onmouseover=function() 
    {
    this.className+=" over";
      }
      node.onmouseout=function() 
       {
      this.className=this.className.replace
      (" over", "");
       }
       }
      }
  }
}
window.onload=startList;

function mask(t, mask)
{
       var i = t.value.length;
       var exit = mask.substring(1,0);
       var text = mask.substring(i)
     if (text.substring(0,1) != exit)
     {
       t.value += text.substring(0,1);
     }
}

function redirect(linkTo){
  var lastTime = Date.now();
  alert("Cadastro concluído com sucesso!");
  while(true){
    var curTime = Date.now();
    if(curTime-lastTime==3000){
      window.location.href = linkTo;
      break;
    }
  }
}
