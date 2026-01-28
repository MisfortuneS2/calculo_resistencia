//L= comprimento [m]
//A = área de seção transversal [mm²]
//mat = material => resistividade do material =>
//se for cobre = 0,017
//se for aluminio = 0,028
function calcularResistencia(L,A,mat){
    return (mat * L) / A
}

//atribui o valor do material
//se for cobre = 0,017
//se for aluminio = 0,028
function verTipoMaterial(material){
    const cobre = 0.017
    const aluminio = 0.028

    if(material === 'cobre'){
        return cobre
    }else if(material === 'aluminio'){
        return aluminio
    }else{
        return 'material inválido'
    }
}

let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')
console.log (calcular)

calcular.addEventListener('click', ()=>{
    let material = document.getElementById('material').value
    let resistencia = 0
    let comprimento = Number(document.getElementById('comprimento').value)
    let area = Number(document.getElementById('area').value)

    let mat = verTipoMaterial(material)

     resistencia = calcularResistencia(comprimento,area,mat)
    // console.log(`A resistência do condutor é ${resistencia.toFixed(3)}Ω`)

    resposta.innerHTML = ``
    resposta.innerHTML += `A resistência do condutor é ${resistencia.toFixed(3)}Ω`
    resposta.style.fontSize = '1.6rem'
    resposta.style.fontWeight = 'bold'
    resposta.style.fontFamily = 'Nunito'
    resposta.innerHTML += `<hr>`
})
