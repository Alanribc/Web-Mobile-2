import { BuscaFilmePorId } from "@/components/BuscaID";
import Image from "next/image";

export default async function Filmes ({params}) {
    const {filme} = await params;
    const dados = await BuscaFilmePorId(filme);

    if(!dados) {
        return <h1>Filme não encontrado</h1>
    }
    
    return(
        <main className="mainFilme">
            <article className="article1">
                <section className="centralizado">
                    {dados.poster_path ? (
                       <Image
                        width= {200}
                        height= {300}
                        src = {`https://image.tmdb.org/t/p/w300${dados.poster_path}`}
                        alt = {dados.title}
                        className="capa"
                    /> 
                    ) : (
                        <h1>Sem imagem</h1>
                    )}
                    <h1 className="nome filme">Filme: {dados.title}</h1>
                    <h1> Ano: {dados.release_date?.split('-')[0] || "Desconhecido"}</h1>
                </section>
                <p>Descrição: {dados.overview || "Sem descrição."}</p>
            </article>
        </main>
    )
}