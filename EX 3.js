principal()

function principal(){
    pessoas = []
    imoveis = []
    let opcao = 0

    do{

        opcao = Number(prompt(`Escolha uma das opções:\n [1] - Cadastrar uma pessoa \n [2] - Cadastrar um imóvel \n [3] - Valor total registrado em um RG \n [4] - CPF da pessao com imóvel mais caro \n [5] - Sair`))

        switch (opcao){
            case 1:
                cadastraPessoa(pessoas)
                break
            case 2: 
                cadastraImovel(pessoas, imoveis)
                break
            case 3: 
                valorTotal(pessoas, imoveis)
                break
            case 4: 
                imovelMaisCaro(pessoas, imoveis)
                break
            case 5: 
                alert(`Obrigado por usar esse software`)
                break
            default:
                alert(`Opção inválida`)
        }

    }
    while(opcao != 4)
}


function cadastraPessoa(pes){
    let objeto = new Object()
    objeto.rg = Number(prompt(`Informe o RG, sem pontos nem traços`))
    objeto.cpf = prompt(`Informe o CPF no formato: nnn.nnn.nnn-dd`)
    objeto.nome = prompt(`Informe o nome`)

    pes.push(objeto)
}

function cadastraImovel(pes, im){

    let objeto = new Object()
    objeto.cod = Number(prompt(`Informe o código do imóvel`))
    objeto.endereco = prompt(`Informe o endereço do imóvel`)
    objeto.tamanho = Number(prompt(`Informe o tamanho do imóvel`))   
    objeto.tipo = prompt(`Informe o tipo do imóvel`)
    objeto.valor = Number(prompt(`Informe o valor do imóvel`))
    objeto.rg = Number(prompt(`Informe os numeros do RG (sem pontos nem traços) do dono do imóvel que será cadastrado`))

    for(let i = 0; i < pes.length; i++){
        if (pes[i].rg == objeto.rg){
            im.push(objeto)
            alert(`Cadastro realizado com sucesso`)
            return
        }
    }
    alert(`Cadastro de imóvel não realizado, pois não há ninguém cadastrado que possui o RG informado, retornando ao menu...`)

}


function valorTotal(pes, im){
    let rg = Number(prompt(`Informe os numeros do RG (sem pontos nem traços) de um possivel dono de imóveis`))
    let total = 0
    for(let i = 0; i < pes.length; i++){
        if (rg == pes[i].rg){
            for(let j = 0; j < im.length; j++){
                if(rg == im[j].rg){
                   total += im[j].valor 
                }
            }
        }
        console.log(`${pes[i].nome} possui um total de R$${total}`)
        return
    }
}


function imovelMaisCaro(pes, im){
    let maisCaro = im[0].valor
    let cpfMaisCaro = pes[0].cpf
    for(let i = 1; i < im.length; i++){
        if(im[i].valor > maisCaro){
            maisCaro = im[i].valor
            for(let j = 0; j < pes.length; j++){
                if(pes[j].rg == im[i].rg){
                    cpfMaisCaro = pes[j].cpf
                }
            }
        }
    }

    console.log(`${cpfMaisCaro} é o CPF da pessoa com o imóvel mais caro registrado, com o valor de ${maisCaro}`)
}