export async function BuscaFilmePorId(id) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=d3bb84ede80dc92a552c391613321c4b&language=pt-BR`;
    const resp = await fetch(url);
    const json = await resp.json();

    if (json.success === false || json.status_code) {
      return null;
    }

    return json;
  } catch (error) {
    return null;
  }
}