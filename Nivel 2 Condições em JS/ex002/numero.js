function iniciar() {
let num = Number(window.prompt('Digite um número: '))
let tipo
if (num % 2 == 0) {
    tipo = '<strong>Par</strong>'
} else {
    tipo = '<strong>Ímpar</strong>'
}

let res = document.getElementById('res')
res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`

}