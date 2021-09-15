
Chutar = () => {
    let numeroSecreto = parseInt(Math.random() * 11);
    let chute = parseInt(document.getElementById("valor").value);
    console.log(chute)
    if (chute == numeroSecreto) {
        resultado = document.getElementById("resultado").innerHTML = "Olá, você acertouuu!";
    } else if (chute > 10 || chute < 0) {
        resultado = document.getElementById("resultado").innerHTML = "0lá, por favor dígite um número entre 0 e 10!";
    }else{
        resultado = document.getElementById("resultado").innerHTML = "Olá, você errouuu!";
    }
}

