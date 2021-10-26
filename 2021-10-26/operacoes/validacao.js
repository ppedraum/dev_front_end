function operacao(){
    var v = [];
    var total=0;
    v.push(parseInt(document.getElementById("v1").value));
    v.push(parseInt(document.getElementById("v2").value));
    if(document.getElementById("sel_operacao").value=="+"){
        for(var i=0;i<v.length;i++){
            total+=v[i];
        }
    }else if(document.getElementById("sel_operacao").value=="-"){
        total=v[0]-v[1];
    }else if(document.getElementById("sel_operacao").value=="*"){
        total=v[0]*v[1];
    }else if(document.getElementById("sel_operacao").value=="/"){
        total=v[0]/v[1];
    }else{
        total="Essa função não foi implementada ainda!";
    }
    console.log(v);
    console.log("total="+total);
    document.getElementById("total").innerHTML="Total = "+ total;

    /* var v1=parseInt(document.getElementById("v1").value);
    var v2=parseInt(document.getElementById("v2").value);
    total = v1+v2;
    document.getElementById("total").innerHTML="Total = "+ total; */

}