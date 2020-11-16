function começar() {
    let num1 = Number(window.prompt('Digite um número: '))
    let num2 = Number(window.prompt('Digite outro número: '))
    
    let res = document.getElementById('res')
    if (num1 == num2 || num2 == num1) {
      res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, ambos são <strong>IGUAIS</strong>!</p>` 
    }    
    let maior 
     if (num1 > num2) {
        maior = num1
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${maior}</strong></p>`
    } else if (num1 < num2) {
        maior = num2
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${maior}</strong></p>`
    }
     
} 