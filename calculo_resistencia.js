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

function principal(){
    let material = 'cobre' //'aluminio'
    let resistencia = 0.0
    let comprimento = 1000.0
    let area = 6.0

    let resposta = ''

    let mat = verTipoMaterial(material)
    console.log(mat)

    resistencia = calcularResistencia(comprimento,area,mat)
    console.log(`A resistência do condutor é ${resistencia.toFixed(3)}Ω`)
}

principal()