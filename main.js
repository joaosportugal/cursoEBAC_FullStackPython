const notas = [
    {nome: 'pedro', nota: 10},
    {nome: 'paulo', nota: 8},
    {nome: 'vitor', nota: 3.5},
    {nome: 'alessandra', nota: 6},
    {nome: 'marcos', nota: 7},
    {nome: 'amanda', nota: 4.2},
    {nome: 'almir', nota: 9.8}
]


function getAprovados() {
    const aprovados = notas.filter(aluno => aluno.nota >= 6)
    return aprovados
}

console.log(getAprovados());

