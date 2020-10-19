principal()

function principal(){
    matriz = []
    vetor = []
    let opcao = 0

    do{

        opcao = Number(prompt(`Escolha uma das opções:\n [1] - cadastrar um veículo \n [2] - Calcular a méida de notas de cada carro \n [3] - Calcular a menor nota de avaliação \n [4] - Sair`))

        switch (opcao){
            case 1:
                cadastra(matriz, vetor)
                break
            case 2: 
                media(matriz, vetor)
                break
            case 3: 
                menor(matriz, vetor)
                break
            case 4: 
                alert(`Obrigado por utilizar esse software!`)
                break
            default:
                alert(`Opção inváçida`)
        }

    }
    while(opcao != 4)
}


function cadastra(mat, vet){
    for(let i = 0; i < 4; i++){
        mat[i] = [] // tranforma o vetor em matriz
        
        let objeto = new Object() // cria um objeto para colocar os dados dos carros
        objeto.marca = prompt(`Marca: `)
        objeto.modelo = prompt(`Modelo`)
        objeto.ano = Number(prompt(`Ano do carro`))
        objeto.valor = Number(prompt(`Valor`))
        objeto.media = 0
        vet.push(objeto) // coloca o objeto dentro do vetor
        
        for(let j = 0; j < 5; j++){
            mat[i][j] = Number(prompt(`Nota da avaliação ${j+1}`))
        }
    }
}


function media(mat, vet){
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 5; j++){
            vet[i].media += mat[i][j]
        }
        vet[i].media = vet[i].media / 5
        console.log(`${vet[i].marca} ${vet[i].modelo} tem a média de ${vet[i].media}`)
    }
}


function menor(mat, vet){

    for(let j = 0; j<5; j++){
        
        let menorValor = mat[0][j]
        let menorModelo = vet[0].modelo

        for(let i = 1; i < 4; i++){

            if (mat[i][j] < menorValor){
                menorValor = mat[i][j]
                menorModelo = vet[i].modelo
            }
        }

        console.log(`${menorModelo} é o carro com a pior nota da avaliação ${j + 1} com a nota de ${menorValor}`)
    }
}