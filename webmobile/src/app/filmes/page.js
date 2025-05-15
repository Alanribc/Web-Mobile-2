import Image from "next/image";

export default function Filme() {

    const filmes = [
        {codigo: 1, nome: "Shrek 1", ano: 2001, descricao: "Shrek e Burro", capa: "/images/velozes.jpg"},
        {codigo: 2, nome: "Velozes e Furiosos 1", ano: 2001, descricao: "carro", capa: "/images/velozes.jpg"},
        {codigo: 3, nome: "EuroTrip", ano: 2004, descricao: "besteirol", capa: "/images/velozes.jpg"}
    ]

    const qtdFilmes = filmes.reduce((acumulador) => {
        return acumulador + 1;
    },0);

    return(
        <main className="mainPrincipal">
            <article className="article1">
                <h1>Filmes: {qtdFilmes}</h1>
                <section>
                        {
                            filmes.map((f) => {
                                return(
                                    <div key = {f.codigo} className="divFilmes">
                                        <h2 key={f.codigo}>{f.codigo} - {f.nome}</h2>
                                        <Image
                                        width= {200}
                                        height= {200}
                                        src = {f.capa}
                                        alt = {f.nome}
                                        />
                                    </div>
                                    
                                )
                            })
                        }
                </section>
            </article>
        </main>
    );
}