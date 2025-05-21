import Image from "next/image";

export default async function Filmes ({params}) {
    const {filme} = await params;

    const codigoFilme = Number(filme);

    const filmes = [
        {codigo: 1, nome: "Shrek 1", ano: 2001, descricao: "Shrek e Burro", capa: "/images/shrek.jpg"},
        {codigo: 2, nome: "Velozes e Furiosos 1", ano: 2001, descricao: "carro", capa: "/images/velozes.jpg"},
        {codigo: 3, nome: "EuroTrip", ano: 2004, descricao: "besteirol", capa: "/images/eurotrip.jpg"}
    ]

    const resposta = filmes.filter((f) => f.codigo === codigoFilme);

    if(resposta.length === 0){
        return <h1>Página não encontrada</h1>
    }
    

    return(
        <main className="mainFilme">
            <article className="article1">
                <section className="centralizado">
                    <Image
                        width= {200}
                        height= {300}
                        src = {resposta[0].capa}
                        alt = {resposta[0].nome}
                        className="capa"
                    />
                    <h1 className="nome filme">Filme: {resposta[0].nome}</h1>
                    <h1> Ano: {resposta[0].ano}</h1>
                </section>
                <h1>Descrição: {resposta[0].descricao}</h1>
            </article>
        </main>
    )
}