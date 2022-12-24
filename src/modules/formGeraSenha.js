import geraSenha from './gerador'

const qtd = document.querySelector('#qtd')
const numero = document.querySelector('#numeros')
const maiusculas = document.querySelector('#maiusculas')
const minusculas = document.querySelector('#minusculas')
const simbolos = document.querySelector('#simbolos')
const form = document.querySelector('form')
const senhaGerada = document.querySelector('.senha-gerada')

export default () => {
    form.addEventListener('submit', e =>{
        e.preventDefault()
        senhaGerada.innerHTML = gera()
    })
}

function gera(){
    return geraSenha(
        qtd.value,
        maiusculas.checked,
        minusculas.checked, 
        numero.checked,
        simbolos.checked
    )
}