
import Pesquisa from "@/components/Pesquisa";
export default function Home() {
  return (
    <main className="mainPrincipal">
      <article className = "article1">
        <p>Bem-vindo ao site cineFav!!</p>
        <p>Aqui, você poderá encontrar os filmes que você mais gosta e fazer uma lista com eles.</p>
        <p>Através da API, você poderá consultar uma grande diversidade de filmes</p>
      </article>
      <article className = "article2">
        <Pesquisa />     
      </article>
    </main>
    
  );
}
