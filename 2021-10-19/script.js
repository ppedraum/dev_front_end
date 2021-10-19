function teste(){
    let nome=prompt("Write your name: ");
    if(nome!=null && nome!=""){
        alert("Hello "+nome+"!");
        document.write("<h1>"+nome+"</h1>");
    }else{
        alert("Você não inseriu nenhum nome!");
    }
}
