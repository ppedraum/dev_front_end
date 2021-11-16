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

var slides=new Array("equipe/Cleo.JFIF","equipe/Dennis.JFIF","equipe/Mark.JFIF");
var tam=slides.length;
var satual=1;
var tmpSlider;

function trocaAutomatica(){
	satual++;
	if(satual >= tam){
		satual=0;
	}
  document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
}

function iniciaSlider(){
	document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
	tmpSlider=setInterval(trocaAutomatica,3000);
}

function parar(){
	clearInterval(tmpSlider);
}

function troca(dir){
	satual+=dir;
	if(satual < 0){
		satual=2;
	}else if(satual >= tam){
		satual=0;
	}
	document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
	clearInterval(tmpSlider);
	tmpSlider=setInterval(trocaAutomatica,3000);
}
