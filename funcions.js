function esparell(){
    // Llegim el que han introduit a les variables
    var a = document.getElementById('numero1').value;
    //Passam el text d'a a números (Integer - enter)
    a = parseInt(a);

    if (a%2==0){
        document.getElementById('resposta1Verda').hidden = false;
        document.getElementById('resposta1Vermella').hidden = true;

    }else{
        document.getElementById('resposta1Vermella').hidden = false;
        document.getElementById('resposta1Verda').hidden = true;
    }

}
function divisors() {
    document.getElementById('divisor1Verda').hidden = true;
    document.getElementById('divisor2Blau').hidden = true;
    document.getElementById('divisor3Vermell').hidden = true;
    var b = document.getElementById('numero2').value;
    b = parseInt(b);
    if (b%2==0) {
        document.getElementById('divisor1Verda').hidden = false;
    }
    if (b%3==0){
        document.getElementById('divisor2Blau').hidden = false;
    }
    if (b%6==0){
        document.getElementById('divisor3Vermell').hidden = false;
        document.getElementById('divisor2Blau').hidden = true;
        document.getElementById('divisor3Vermell').hidden = true;
    }
}
function calcular() {
    let a = document.getElementById('numero3').value;
    let b = document.getElementById('numero4').value;
    a = parseInt(a)
    b = parseInt(b)

    let text_valors = "";
    if (a > b) {
        for (let i = a - 1; i > b ; i--) {
            text_valors += i + " ";
        }
    } else {
        for (let i = a + 1; i < b; i++) {
            text_valors += i + " ";
        }
    }

    document.getElementById('valors').innerHTML = text_valors;
    document.getElementById('valors').hidden = false;
}
