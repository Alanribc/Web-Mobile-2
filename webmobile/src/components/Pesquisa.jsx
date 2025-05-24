'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Busca } from './Busca';

export default function Pesquisa() {
  const [query, setQuery] = useState('');
  const [filmes, setFilmes] = useState([]);
  const [erro, setErro] = useState(null);

  const handleBuscar = async () => {
    const {filmes, erro} = await Busca(query);
    setFilmes(filmes);
    setErro(erro);
  };

  return (
    <section className="secaoBarra">
      <section className= "caixaPesquisa">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome do filme"
          className="barraPesquisa"
        />
        <button onClick={handleBuscar} className="ml-2 p-2 bg-blue-500 text-white">
          Buscar
        </button>

        {erro && <p className="text-red-500 mt-2">{erro}</p>}

      </section>

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
            <Link href = {`/filmes/${f.id}`}>
              <button>Ver Mais</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
