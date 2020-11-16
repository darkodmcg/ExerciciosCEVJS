function calcular() {
    let nom = window.prompt('Qual nome do aluno?')
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nom}?`))
    let res = document.getElementById('res')
    final = (nota1 + nota2) / 2

    let msg // pensei mas esqueci dessa variável

    if (final >= 6) {
        msg = 'Meus parabéns!'
    } else {
        msg = 'Estude um pouco mais!'
    }

    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${final}<mark>. </p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}