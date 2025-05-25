export async function Busca (query){
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d3bb84ede80dc92a552c391613321c4b&language=pt-br&query=${encodeURIComponent(query)}`;

      const resp = await fetch(url);
      const json = await resp.json();

      if (json.errors || json.success === false) {
        return {filmes : [], erro: "Filme não encontrado."};
      } else {
        return {filmes: json.results, erro: null};
      }
    }catch (error) {
      return {filmes: [], erro: "Erro na busca"};
    }
}
