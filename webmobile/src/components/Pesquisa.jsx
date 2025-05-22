'use client';

import { useState } from 'react';

export default function Pesquisa() {
  const [query, setQuery] = useState('');
  const [filmes, setFilmes] = useState([]);
  const [erro, setErro] = useState(null);

  const buscar = async () => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d3bb84ede80dc92a552c391613321c4b&query=${encodeURIComponent(query)}`;

      const resp = await fetch(url);
      const json = await resp.json();

      if (json.errors || json.success === false) {
        setErro('Filme não encontrado.');
        setFilmes([]);
      } else {
        setFilmes(json.results);
        setErro(null);
      }
    } catch (error) {
      setErro('Erro na busca.');
      setFilmes([]);
    }
  };

  return (
    <section className="secaoBarra">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite o nome do filme"
        className="barraPesquisa"
      />
      <button onClick={buscar} className="ml-2 p-2 bg-blue-500 text-white">
        Buscar
      </button>

      {erro && <p className="text-red-500 mt-2">{erro}</p>}

      <div className="capaFilmes">
        {filmes.map((f) => (
          <div key={f.id} className="divFilmes">
            {f.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${f.poster_path}`}
                alt={f.title}
                className="capa"
              />
            ) : (
              <p>Sem imagem</p>
            )}
            <h2>{f.title}</h2>
            <p>{f.release_date || 'Data desconhecida'}</p>
            <p>{f.overview ? f.overview : 'Sem descrição'}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
