'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Filme() {
    const [filmes, setFilmes] = useState([]);


    useEffect(() => {
        const filmesCurtidos = JSON.parse(localStorage.getItem('filmesCurtidos') || '[]');
        setFilmes(filmesCurtidos);
    }, []);
    
    
    return(
        <main className="mainPrincipal">
            <article className="article1">
                <h1>Filmes: {filmes.length}</h1>
                <section className="capaFilmes">
                        {
                            filmes.map((f) => {
                                return(
                                    <div key = {f.id} className="divFilmes">
                                        <Link href = {'\\filmes\\'+f.id}>
                                            <Image
                                                width= {200}
                                                height= {300}
                                                src = {`https://image.tmdb.org/t/p/w200${f.poster_path}`}
                                                alt = {f.title}
                                                className="capaLista"
                                            />
                                        </Link>
                                    </div>
                                   
                                    
                                )
                            })
                        }
                </section>
            </article>
        </main>
    );
}