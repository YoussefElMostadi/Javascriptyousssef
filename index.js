function myFunction(){
    document.getElementById("demo").innerHTML = "Hello World";
    document.getElementById("demo").style.color = "red";
}
function concatena(){
    let Nom= document.getElementById("CampNom").value
    let Llinatges = document.getElementById("CampLlinatges").value
    alert("Hola" + Nom + " " + Llinatges)
}
function parellOsenar()   {
    let numero = document.getElementById("numero").value
    if(numero%2==0){
        alert("Es Parell");
    }
    else{
        alert("Es Senar");
    }
}
