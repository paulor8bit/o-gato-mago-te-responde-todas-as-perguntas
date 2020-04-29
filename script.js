function getInteiroAleatorio (min, max) { 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let escolha = getInteiroAleatorio(1, 4)
if (escolha == 1) {
    document.getElementById("resposta").innerHTML = `O Grande Gato Mago Que Toma banho na Pia te responde: Talvez`
    }
    if (escolha == 2) {
    document.getElementById("resposta").innerHTML = `O Grande Gato Mago Que Toma banho na Pia te responde: Sim`
    }
    if (escolha == 3) {
    document.getElementById("resposta").innerHTML = `O Grande Gato Mago Que Toma banho na Pia te responde: Não`
    }
    

        

      