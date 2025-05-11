export default function Filme() {

    const filmes = [
        {codigo: 1, nome: "Shrek 1"},
        {codigo: 2, nome: "Velozes e Furiosos 1"}
    ]

    return(
        <main className="mainPrincipal">
            <article className="article1">
                <h1>Filme:</h1>
                <section>
                        {
                            filmes.map((f) => {
                                return(
                                    <h2 key={f.codigo}>{f.codigo} {f.nome}</h2>
                                )
                            })
                        }
                </section>
            </article>
        </main>
    );
}