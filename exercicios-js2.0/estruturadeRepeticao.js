const alunosdaturmaA = [
    {
        nome: "Clerton",
        nota: 10,
    },
    {
        nome: "Robson",
        nota: 2,
    },
    {
        nome: "Siclano",
        nota: 0,
    },
    {
        nome: "Novo aluno",
        nota: 5,
    },
    {
        nome: "Mectrab",
        nota: 3,
    },
];

const alunosdaturmaB = [
    {
        nome: "Raryssa",
        nota: 10,
    },
    {
        nome: "Clerton",
        nota: 6,
    },
    {
        nome: "Rafaele",
        nota: 8.2,
    },
    {
        nome: "Andrew",
        nota: 9.1,
    },
    {
        nome: "Nisse",
        nota: 10,
    },
];

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma += alunos[i].nota;
    }
    const media = soma / alunos.length;
    return media.toFixed(1);
    //  console.log((soma/4).toFixed(1)); OUTRA FORMA
    // return soma;
}

const media1 = calculaMedia(alunosdaturmaA);
const media2 = calculaMedia(alunosdaturmaB);

function imprimiResultado(media, turma) {
    if (media > 5) {
        console.log(`A ${turma} foi aprovada, com o resultado ${media}`);
    } else {
        console.log(`A ${turma} foi reprovada, com a media ${media}`);
    }
}

imprimiResultado(media1, "TurmaA");
imprimiResultado(media2, "TurmaB");

//   const teste = calculaMedia(alunosdaturmaA)
// calculaMedia2(teste)

// Marcar aluno como reprovado se a nota
// for menor que 5
// e, também, enviar uma mensagem

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
    //   console.table(alunos);
}

marcarComoReprovado(alunosdaturmaA);

function exibirAlunoReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(
            `O aluno ${aluno.nome} está reprovado com a nota ${aluno.nota}`
        );
    }
}

function totalAlunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        exibirAlunoReprovado(aluno);
    }
}

totalAlunoReprovado(alunosdaturmaA);
totalAlunoReprovado(alunosdaturmaB);

// function marcarComoReprovado(aluno){

// }

// function exibirMensagemReprovado(aluno){

// }

// function exibirAlunoReprovado(alunos){

// }

// function marcarComoReprovado(aluno){
//   aluno.reprovado = false;
//      if(aluno.nota < 5){
//             aluno.reprovado = true;
//         }

//     //console.table(alunos);
// }

// function enviarMensagemReprovado(aluno){
//     if(aluno.reprovado){
//         console.log(`o Aluno ${aluno.nome} está reprovado`);
//     }
// }

// function alunoReprovado(alunos){
//     for(let aluno of alunos){
//         marcarComoReprovado(aluno);
//         enviarMensagemReprovado(aluno);
//     }
// }

// alunoReprovado(alunosdaturmaA);
// alunoReprovado(alunosdaturmaB);

// //  -------------SE FOSSE EM C++ , ERA A MESMA LÓGICA ---------------------
//     function marcarComoReprovado(alunos){
//         for(let j = 0; j<alunos.length; j++){
//             if(alunos[j].nota< 5){
//                 return false;
//             }else{
//                 return true;
//                 break;
//             }
//         }
//     }

//     const rep = marcarComoReprovado(alunosdaturmaA);

//     function alunosReprovados(alunos, reprovados){
//         for(let z = 0; z< alunos.length; z++ )
//         console.log(alunosdaturmaA[z].nome);
//     }

//    // marcarComoReprovado(alunosdaturmaA,rep)
