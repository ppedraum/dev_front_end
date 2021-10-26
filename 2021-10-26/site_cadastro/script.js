function mask(t, mask){
    var i = t.value.length;
    var exit = mask.substring(1,0);
    var text = mask.substring(i)
     if (text.substring(0,1) != exit){
        t.value += text.substring(0,1);
    }
}

function enviar(){
    document.getElementById("validacao").innerHTML="Cadastrado com sucesso!";
}

function banner(){
    imgs=new Array("1.png", "2.png", "3.png");
    links=new Array("link1.hmtl", "link2.html", "link3.html");
    i=0
}