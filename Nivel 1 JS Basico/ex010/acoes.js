let res = document.getElementById('res')

function ação1() {
    
    res.innerHTML += '<p>Clicou no primeiro botão.</p>'

}
function ação2() {
    
    res.innerHTML += '<p>Clicou no segundo botão.</p>'
}
function ação3() {
    
    res.innerHTML += '<p>Clicou no terceiro botão.</p>'    
}
function ação4() {
    
    res.innerHTML += '<p>Clicou no quarto botão.</p>'
    
}
function limpar() { // botãozin de limpar
    
    res.innerHTML = '<p>Aqui vou registrar suas ações com os botões acima.</p>'
}
