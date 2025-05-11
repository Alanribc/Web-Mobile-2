export default async function Filmes ({params}) {
    const {filme} = await params;

    const filmes = [
        {codigo: 1, nome: "Shrek 1"},
        {codigo: 2, nome: "Velozes e Furiosos 1"}
    ]

    const resposta = filmes.filter((f) => f.codigo === filme);

    if(resposta.length === 0){
        return <h1>Página não encontrada</h1>
    }

    return(
        <main className="mainFilme">
            <article className="article1">
                <h1 className="nome filme">Filme - {resposta[0].nome}</h1>
            </article>
        </main>
    )
}