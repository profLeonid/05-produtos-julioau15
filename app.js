'use strict'

function adicionarProduto(){
    const inputProduto = document.getElementById('input-produto')
    const produtosContainer = document.getElementById('produtos-container')
    if(inputProduto.value == ''){
        alert('erro');
        inputProduto.focus()
    }else{
        let textProduto = document.createElement('span')
        textProduto.textContent = inputProduto.value
        textProduto.className = 'border-be-2 w-[100%] text-center'

        produtosContainer.appendChild(textProduto)
        inputProduto.value = ''
        inputProduto.focus()
    }
}

function limparLista(){
    const produtosContainer = document.getElementById('produtos-container')
    produtosContainer.innerText = ''
    inputProduto.focus()
}